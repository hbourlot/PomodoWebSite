import { toast } from "react-toastify";
import { Dialog } from "../components/Dialog/Dialog";

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
	static success(msg = TOAST_MESSAGES.SUCCESS) {
		return toast.success(msg);
	}
	static warn(msg = TOAST_MESSAGES.WARN) {
		return toast.warning(msg);
	}
	static start() {
		this.dismiss();
		return toast.info(TOAST_MESSAGES.START);
	}

	static interrupt() {
		this.dismiss();
		return toast.error(TOAST_MESSAGES.INTERRUPT);
	}
	static error(msg = TOAST_MESSAGES.INTERRUPT) {
		return toast.error(msg);
	}

	static confirm(data: string, onClosing: (confirmation: boolean) => void) {
		this.dismiss();
		return toast(Dialog, {
			data,
			onClose: (confirmation) => {
				if (confirmation) return onClosing(true);
				return onClosing(false);
			},
			autoClose: false,
			closeOnClick: false,
			closeButton: false,
			draggable: false,
		});
	}
}
