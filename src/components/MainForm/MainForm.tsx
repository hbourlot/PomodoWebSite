import { Input, Cycles, DefaultButton } from '../index';
import { CirclePlayIcon, StopCircleIcon } from 'lucide-react';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { getFormattedSecondsRemaining } from '../../utils/getFormattedSecondsRemaining';

export function MainForm() {
	const { state, setState } = useTaskContext();

	// Cycles
	const nextCycle = getNextCycle(state.currentCycle);
	const nextCycleType = getNextCycleType(nextCycle);

	const taskNameInput = useRef<HTMLInputElement>(null);

	const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!taskNameInput.current) return;

		const taskName = taskNameInput.current.value.trim();

		if (!taskName) {
			alert('Enter the task name');
			return;
		}

		const newTask: TaskModel = {
			id: Date.now().toString(),
			name: taskName,
			startDate: Date.now(),
			completeDate: null,
			interruptDate: null,
			duration: state.config[nextCycleType],
			type: nextCycleType,
		};

		setState(prevState => {
			return {
				...prevState,
				tasks: [...prevState.tasks, newTask],
				secondsRemaining: newTask.duration * 60,
				formattedSecondsRemaining: getFormattedSecondsRemaining(
					newTask.duration * 60,
				),
				activeTask: newTask,
				currentCycle: nextCycle,
				config: { ...prevState.config },
			};
		});

		console.log(taskName);
	};

	function handleInterruptTask(
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) {
		e.preventDefault();
		setState(prevState => {
			return {
				...prevState,
				secondsRemaining: 0,
				formattedSecondsRemaining: '00:00',
				activeTask: null,
				tasks: prevState.tasks.map(task => {
					if (
						prevState.activeTask &&
						prevState.activeTask.id === task.id
					)
						return { ...task, interruptDate: Date.now() };
					return task;
				}),
			};
		});
	}

	return (
		<>
			<form onSubmit={handleFormSubmit} className='form' action=''>
				<div className='formRow'>
					<Input
						labelText='Task:'
						id='myInput'
						type='text'
						title='title'
						placeholder='Type here'
						ref={taskNameInput}
						disabled={!!state.activeTask}
					/>
				</div>
				<div className='formRow'>
					<p>Lorem ipsum dolor sit amet.</p>
				</div>
				{state.currentCycle > 0 && (
					<div className='formRow'>
						<Cycles />
					</div>
				)}
				<div>
					{!state.activeTask ? (
						<DefaultButton
							aria-label='initialize new task'
							title='initialize new task'
							icon={<CirclePlayIcon />}
							type='submit'
							key='submit button'
						/>
					) : (
						<DefaultButton
							icon={<StopCircleIcon />}
							aria-label='interrupt current task'
							title='interrupt current task'
							color='red'
							type='button'
							onClick={handleInterruptTask}
							key='interrupt button'
						/>
					)}
				</div>
			</form>
		</>
	);
}
