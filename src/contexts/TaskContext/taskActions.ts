import type { TaskModel } from "../../models/TaskModel";
import type { TaskStateModel } from "../../models/TaskStateModel";

export enum TaskActionTypes {
	START_TASK = "START",
	INTERRUPT_TASK = "INTERRUPT",
	RESET_TASK = "RESET",
	COUNT_DOWN = "COUNT_DOWN",
	COMPLETE_TASK = "COMPLETE_TASK",
}

export type TaskActionWithPayLoad =
	| {
			type: TaskActionTypes.START_TASK;
			payload: TaskModel;
	  }
	| {
			type: TaskActionTypes.COUNT_DOWN;
			payload: Pick<TaskStateModel, "secondsRemaining">;
	  };

export type TaskActionWithoutPayload =
	| {
			type: TaskActionTypes.INTERRUPT_TASK;
	  }
	| {
			type: TaskActionTypes.COMPLETE_TASK;
	  };

export type TaskActionModel = TaskActionWithPayLoad | TaskActionWithoutPayload;
