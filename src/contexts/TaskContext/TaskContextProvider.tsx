import { useEffect, useReducer, useState } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "./taskReducer";
import { TimerWorkerManager } from "../../worker/TimerWorkerManager";

type TaskContextProviderProps = {
	children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
	const [state, dispatch] = useReducer(taskReducer, initialTaskState);

	const myWorker = TimerWorkerManager.getInstance();

	myWorker.onmessage((e) => {
		const countDownSeconds = e.data;

		if (countDownSeconds <= 0) {
			myWorker.terminate();
		}

		console.log(countDownSeconds);
	});

	useEffect(() => {
		console.log(state);

		if (!state.activeTask) {
			console.log("Worker not activate!");
			myWorker.terminate();
		}
		myWorker.postMessage(state);
	}, [myWorker, state]);

	return (
		<TaskContext.Provider value={{ state, dispatch }}>
			{children}
		</TaskContext.Provider>
	);
}
