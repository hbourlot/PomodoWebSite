import type { TaskStateModel } from "../../models/TaskStateModel";

type TipsProps = {
	state: TaskStateModel;
	nextCycleType: "workTime" | "shortBreakTime" | "longBreakTime";
};

export function Tips({ state, nextCycleType }: TipsProps) {
	const ActiveTaskMsg = {
		workTime: (
			<p>
				Focus for <b>{state.config.workTime} min</b>
			</p>
		),
		longBreakTime: (
			<p>
				Focus for <b>{state.config.longBreakTime} min</b>
			</p>
		),
		shortBreakTime: (
			<p>
				Focus for <b>{state.config.shortBreakTime} min</b>
			</p>
		),
	};
	const NoActiveTaskMsg = {
		workTime: (
			<p>
				Next cycle is <b>{state.config.workTime} min</b>
			</p>
		),
		longBreakTime: (
			<p>
				Next cycle is <b>long break</b>
			</p>
		),
		shortBreakTime: (
			<p>
				Next cycle is <b>{state.config.shortBreakTime} min</b>
			</p>
		),
	};

	return (
		<>
			{!!state.activeTask && ActiveTaskMsg[state.activeTask.type]}
			{!state.activeTask && NoActiveTaskMsg[nextCycleType]}
		</>
	);
}
