import { useEffect, useReducer, useState } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';
import { taskReducer } from './taskReducer';
import { TaskActionTypes } from './taskActions';

type TaskContextProviderProps = {
	children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
	const [state, setState] = useState(initialTaskState);

	const [myState, dispatch] = useReducer(taskReducer, initialTaskState);

	useEffect(() => {
		console.log(state);
		dispatch({ type: TaskActionTypes.START_TASK });
	}, [state]);

	return (
		<TaskContext.Provider value={{ state, setState }}>
			{children}
		</TaskContext.Provider>
	);
}
