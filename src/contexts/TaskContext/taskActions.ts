import type { TaskModel } from '../../models/TaskModel';

export enum TaskActionTypes {
	START_TASK = 'START',
	INTERRUPT_TASK = 'INTERRUPT',
	RESET_TASK = 'RESET',
}

export type TaskActionWithPayLoad =
	| {
			type: TaskActionType.START_TASK;
			payload: TaskModel;
	  }
	| {
			type: TaskActionType.INTERRUPT_TASK;
			payload: TaskModel;
	  };

export type TaskActionWithoutPayload = {
	type: TaskActionType.RESET_TASK;
};

export type TaskActionModel = TaskActionWithPayLoad | TaskActionWithoutPayload;
