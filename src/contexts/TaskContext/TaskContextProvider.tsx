import { useEffect, useReducer, useRef, useState } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "./taskReducer";
import { TimerWorkerManager } from "../../worker/TimerWorkerManager";
import { TaskActionTypes } from "./taskActions";
import { loadBeep } from "../../utils/loadBeep";
import { toastWrapper } from "../../adapters/toastWrapper";

type TaskContextProviderProps = {
	children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
	const [state, dispatch] = useReducer(taskReducer, initialTaskState);

	const myWorker = TimerWorkerManager.getInstance();
	const playBeepRef = useRef<ReturnType<typeof loadBeep>>(null);

	myWorker.onmessage((e) => {
		const countDownSeconds = e.data;

		if (countDownSeconds < 0) {
			if (playBeepRef.current) {
				toastWrapper.success();
				playBeepRef.current();
				dispatch({ type: TaskActionTypes.COMPLETE_TASK });
			}
			myWorker.terminate();
		} else {
			dispatch({
				type: TaskActionTypes.COUNT_DOWN,
				payload: { secondsRemaining: countDownSeconds },
			});
		}
	});

	useEffect(() => {
		console.log(state);

		if (!state.activeTask) {
			myWorker.terminate();
		}
		myWorker.postMessage(state);
	}, [myWorker, state]);

	useEffect(() => {
		if (state.activeTask && playBeepRef.current === null) {
			console.log("Loading audio");
			playBeepRef.current = loadBeep();
		} else {
			playBeepRef.current = null;
		}
	}, [state.activeTask]);

	return (
		<TaskContext.Provider value={{ state, dispatch }}>
			{children}
		</TaskContext.Provider>
	);
}
