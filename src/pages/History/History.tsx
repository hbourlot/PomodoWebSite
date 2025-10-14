import MainTemplate from "../../templates/MainTemplate/MainTemplate";
import { DefaultButton, Heading, Container } from "../../components";
import {
	TrashIcon,
	ArrowDownNarrowWideIcon,
	ArrowUpWideNarrowIcon,
} from "lucide-react";

import styles from "./styles.module.css";
import { useTaskContext } from "../../contexts/TaskContext";
import {
	sortTasks,
	type SortTasksOptions,
	formatDate,
	getTaskStatus,
} from "../../utils/index";
import { useEffect, useState, type JSX } from "react";
import { toastWrapper } from "../../adapters/toastWrapper";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";

export function History() {
	const { state, dispatch } = useTaskContext();
	const hasTasks = state.tasks.length > 0;
	const [confirmClearHistory, setConfirmClearHistory] = useState(false);

	useEffect(() => {
		document.title = "History - Pomodoro";
	}, []);

	const [sortTaskOptions, setSortTaskOptions] = useState<SortTasksOptions>(
		() => {
			return {
				tasks: sortTasks({ tasks: state.tasks }),
				field: "startDate",
				direction: "desc",
			};
		}
	);

	const arrowIcon: Record<"asc" | "desc", JSX.Element> = {
		asc: <ArrowDownNarrowWideIcon />,
		desc: <ArrowUpWideNarrowIcon />,
	};

	const clearHistory = () => {
		toastWrapper.confirm("Are you sure?", (confirmation) => {
			if (confirmation) dispatch({ type: TaskActionTypes.RESET_TASK });
		});
		return;
	};

	useEffect(() => {
		if (!confirmClearHistory) return;

		setConfirmClearHistory(false);
	}, [confirmClearHistory, dispatch]);

	useEffect(() => {
		setSortTaskOptions((prevState) => ({
			...prevState,
			tasks: sortTasks({
				tasks: state.tasks,
				direction: prevState.direction,
				field: prevState.field,
			}),
		}));
	}, [state.tasks]);

	const handleTasks = ({ field }: Pick<SortTasksOptions, "field">) => {
		const newDirection =
			sortTaskOptions.direction === "desc" ? "asc" : "desc";

		setSortTaskOptions({
			tasks: sortTasks({
				direction: newDirection,
				tasks: sortTaskOptions.tasks,
				field,
			}),
			direction: newDirection,
			field,
		});
	};
	return (
		<>
			<MainTemplate>
				<Container>
					<Heading>
						<span>History</span>
						{hasTasks && (
							<span className={styles.buttonContainer}>
								<DefaultButton
									color="red"
									icon={<TrashIcon />}
									aria-label="Delete History"
									title="Delete History"
									onClick={clearHistory}
								/>
							</span>
						)}
					</Heading>
				</Container>

				{hasTasks && (
					<Container>
						<div className={styles.responsiveTable}>
							<table>
								<thead>
									<tr>
										<th
											className={styles.thSort}
											onClick={() =>
												handleTasks({
													field: "name",
												})
											}>
											Task{" "}
											{
												arrowIcon[
													sortTaskOptions.direction ??
														"desc"
												]
											}
										</th>
										<th
											className={styles.thSort}
											onClick={() =>
												handleTasks({
													field: "duration",
												})
											}>
											Time{" "}
											{
												arrowIcon[
													sortTaskOptions.direction ??
														"desc"
												]
											}
										</th>
										<th
											className={styles.thSort}
											onClick={() =>
												handleTasks({
													field: "duration",
												})
											}>
											Data{" "}
											{
												arrowIcon[
													sortTaskOptions.direction ??
														"desc"
												]
											}
										</th>
										<th>Status</th>
										<th>Type</th>
									</tr>
								</thead>

								<tbody>
									{sortTaskOptions.tasks.map((task) => {
										const taskDic = {
											workTime: "Focus",
											shortBreakTime: "Short break",
											longBreakTime: "Long break",
										};

										return (
											<tr key={task.id}>
												<td>{task.name}</td>
												<td>{task.duration}</td>
												<td>
													{formatDate(task.startDate)}
												</td>
												<td>
													{getTaskStatus(
														task,
														state.activeTask
													)}
												</td>
												<td>{taskDic[task.type]}</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					</Container>
				)}
				{!hasTasks && (
					<p style={{ textAlign: "center", fontSize: "2rem" }}>
						There's no tasks
					</p>
				)}
			</MainTemplate>
		</>
	);
}
