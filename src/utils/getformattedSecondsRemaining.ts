import type { TaskStateModel } from '../models/TaskStateModel';

export function getFormattedSecondsRemaining(
	seconds: TaskStateModel['secondsRemaining'],
) {
	const minutesFormatted = Math.floor(seconds / 60)
		.toString()
		.padStart(2, '0');
	const restFormatted = (seconds % 60).toString().padStart(2, '0');

	return `${minutesFormatted}:${restFormatted}`;
}
