import { Input, Cycles, DefaultButton } from "../index";
import { CirclePlayIcon, StopCircleIcon } from "lucide-react";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";
import { Tips } from "../Tips/Tips";
import { toastWrapper } from "../../adapters/toastWrapper";
import styles from "./style.module.css";

export function MainForm() {
	const { state, dispatch } = useTaskContext();

	const nextCycle = getNextCycle(state.currentCycle);
	const nextCycleType = getNextCycleType(nextCycle);
	const taskNameInput = useRef<HTMLInputElement>(null);
	const lastTaskName = state.tasks[state.tasks.length - 1]?.name || "";

	const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!taskNameInput.current) return;

		const taskName = taskNameInput.current.value.trim();

		if (!taskName) {
			toastWrapper.warn();
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
		toastWrapper.start();
		dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });
	};

	function handleInterruptTask(
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) {
		e.preventDefault();
		toastWrapper.interrupt();
		dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
	}

	return (
		<>
			<form
				onSubmit={handleFormSubmit}
				className={styles.form}>
				<div className={styles.formRow}>
					<Input
						labelText="Task:"
						id="myInput"
						type="text"
						title="title"
						placeholder="Type here"
						ref={taskNameInput}
						disabled={!!state.activeTask}
						defaultValue={lastTaskName}
					/>
				</div>
				<div className={styles.formRow}>
					<Tips
						state={state}
						nextCycleType={nextCycleType}
					/>
				</div>
				{state.currentCycle > 0 && (
					<div className={styles.formRow}>
						<Cycles />
					</div>
				)}
				<div>
					{!state.activeTask ? (
						<DefaultButton
							aria-label="initialize new task"
							title="initialize new task"
							icon={<CirclePlayIcon />}
							type="submit"
							key="submit button"
						/>
					) : (
						<DefaultButton
							icon={<StopCircleIcon />}
							aria-label="interrupt current task"
							title="interrupt current task"
							color="red"
							type="button"
							onClick={handleInterruptTask}
							key="interrupt button"
						/>
					)}
				</div>
			</form>
		</>
	);
}
