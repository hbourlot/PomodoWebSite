import React, { act } from 'react';
import type { TaskStateModel } from '../../models/TaskStateModel';
import { TaskActionTypes, type TaskActionModel } from './taskActions';

export function taskReducer(
	prevState: TaskStateModel,
	action: TaskActionModel,
): TaskStateModel {
	switch (action.type) {
		case TaskActionTypes.START_TASK: {
			return prevState;
		}
		case TaskActionTypes.INTERRUPT_TASK: {
			return prevState;
		}

		case TaskActionTypes.RESET_TASK: {
			return prevState;
		}
	}
}
