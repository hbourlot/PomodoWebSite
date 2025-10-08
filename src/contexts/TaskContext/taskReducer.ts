import type { TaskStateModel } from "../../models/TaskStateModel";
import { TaskActionTypes, type TaskActionModel } from "./taskActions";
import { getFormattedSecondsRemaining } from "../../utils/getFormattedSecondsRemaining";
import { getNextCycle } from "../../utils/getNextCycle";

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
	}
}
