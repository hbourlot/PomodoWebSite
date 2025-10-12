import type { TaskModel } from "./TaskModel";

export type TaskStateModel = {
	tasks: TaskModel[];
	secondsRemaining: number;
	formattedSecondsRemaining: string;
	activeTask: TaskModel | null;
	currentCycle: number; // 1 to 8
	config: {
		workTime: 25;
		shortBreakTime: 5;
		longBreakTime: 15;
	};
};
