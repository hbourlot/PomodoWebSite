import type { TaskModel } from "../../models/TaskModel";
import type { TaskStateModel } from "../../models/TaskStateModel";

export const TaskActionTypes = {
	START_TASK: "START",
	INTERRUPT_TASK: "INTERRUPT",
	RESET_TASK: "RESET",
	COUNT_DOWN: "COUNT_DOWN",
	COMPLETE_TASK: "COMPLETE_TASK",
	CHANGE_SETTINGS: "CHANGE_SETTINGS",
} as const;

export type TaskActionTypes =
	(typeof TaskActionTypes)[keyof typeof TaskActionTypes];

export type TaskActionWithPayLoad =
	| {
			type: typeof TaskActionTypes.START_TASK;
			payload: TaskModel;
	  }
	| {
			type: typeof TaskActionTypes.COUNT_DOWN;
			payload: Pick<TaskStateModel, "secondsRemaining">;
	  }
	| {
			type: typeof TaskActionTypes.CHANGE_SETTINGS;
			payload: TaskStateModel["config"];
	  };

export type TaskActionWithoutPayload =
	| {
			type: typeof TaskActionTypes.INTERRUPT_TASK;
	  }
	| {
			type: typeof TaskActionTypes.COMPLETE_TASK;
	  }
	| {
			type: typeof TaskActionTypes.RESET_TASK;
	  };

export type TaskActionModel = TaskActionWithPayLoad | TaskActionWithoutPayload;
