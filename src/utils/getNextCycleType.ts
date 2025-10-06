import type { TaskModel } from '../models/TaskModel';
import type { TaskStateModel } from '../models/TaskStateModel';

export function getNextCycleType(
	currentCycle: TaskStateModel['currentCycle'],
): TaskModel['type'] {
	if (currentCycle % 8 === 0) return 'longBreakTime';
	if (currentCycle % 2 === 0) return 'shortBreakTime';
	return 'workTime';
}
