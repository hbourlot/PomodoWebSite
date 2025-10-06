import type { TaskModel } from "../../models/TaskModel";

export enum TaskActionTypes {
	START_TASK = "START",
	INTERRUPT_TASK = "INTERRUPT",
	RESET_TASK = "RESET",
}

export type TaskActionWithPayLoad = {
	type: TaskActionTypes.START_TASK;
	payload: TaskModel;
};

export type TaskActionWithoutPayload = {
	type: TaskActionTypes.INTERRUPT_TASK;
};

export type TaskActionModel = TaskActionWithPayLoad | TaskActionWithoutPayload;
