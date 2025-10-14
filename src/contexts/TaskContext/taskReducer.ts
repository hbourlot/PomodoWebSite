import type { TaskStateModel } from "../../models/TaskStateModel";
import { TaskActionTypes, type TaskActionModel } from "./taskActions";
import { getFormattedSecondsRemaining } from "../../utils/getFormattedSecondsRemaining";
import { getNextCycle } from "../../utils/getNextCycle";
import { initialTaskState } from "./initialTaskState";

export function taskReducer(
	prevState: TaskStateModel,
	action: TaskActionModel
): TaskStateModel {
	switch (action.type) {
		case TaskActionTypes.START_TASK: {
			const newTask = action.payload;
			const secondsRemaining = newTask.duration * 60;
			const currentCycle = getNextCycle(prevState.currentCycle);
			return {
				...prevState,
				tasks: [...prevState.tasks, newTask],
				secondsRemaining,
				formattedSecondsRemaining:
					getFormattedSecondsRemaining(secondsRemaining),
				activeTask: newTask,
				currentCycle: currentCycle,
			};
		}
		case TaskActionTypes.INTERRUPT_TASK: {
			return {
				...prevState,
				secondsRemaining: 0,
				formattedSecondsRemaining: "00:00",
				activeTask: null,
				tasks: prevState.tasks.map((task) => {
					if (
						prevState.activeTask &&
						prevState.activeTask.id === task.id
					)
						return { ...task, interruptDate: Date.now() };
					return task;
				}),
			};
		}
		case TaskActionTypes.COUNT_DOWN: {
			return {
				...prevState,
				secondsRemaining: action.payload.secondsRemaining,
				formattedSecondsRemaining: getFormattedSecondsRemaining(
					prevState.secondsRemaining
				),
			};
		}
		case TaskActionTypes.COMPLETE_TASK: {
			return {
				...prevState,
				activeTask: null,
				secondsRemaining: 0,
				formattedSecondsRemaining: "00:00",
				tasks: prevState.tasks.map((task) => {
					if (
						prevState.activeTask &&
						prevState.activeTask.id === task.id
					) {
						return { ...task, interruptDate: Date.now() };
					}
					return task;
				}),
			};
		}
		case TaskActionTypes.RESET_TASK: {
			return { ...initialTaskState };
		}

		case TaskActionTypes.CHANGE_SETTINGS: {
			return { ...prevState, config: { ...action.payload } };
		}
	}
}
