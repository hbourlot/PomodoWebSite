import { toast } from "react-toastify";

const TOAST_MESSAGES = {
	SUCCESS: "Task completed",
	INTERRUPT: "Task Interrupted",
	WARN: "Type the task name",
	START: "Starting Task",
};

export class toastWrapper {
	static dismiss() {
		return toast.dismiss();
	}
	static success() {
		return toast.success(TOAST_MESSAGES.SUCCESS);
	}
	static warn() {
		return toast.warning(TOAST_MESSAGES.WARN);
	}
	static start() {
		this.dismiss();
		return toast.info(TOAST_MESSAGES.START);
	}

	static interrupt() {
		this.dismiss();
		return toast.error(TOAST_MESSAGES.INTERRUPT);
	}
}
