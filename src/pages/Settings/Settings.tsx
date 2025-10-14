import MainTemplate from "../../templates/MainTemplate/MainTemplate";
import { Container, DefaultButton, Heading, Input } from "../../components";
import styles from "./styles.module.css";
import { useEffect, useRef } from "react";
import { SaveIcon } from "lucide-react";
import { useTaskContext } from "../../contexts";
import { toastWrapper } from "../../adapters/toastWrapper";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";

export function Settings() {
	const { state, dispatch } = useTaskContext();

	useEffect(() => {
		document.title = "Settings - Pomodoro";
	}, [])

	const workTimeInput = useRef<HTMLInputElement>(null);
	const shortBreakTimeInput = useRef<HTMLInputElement>(null);
	const longBreakTimeInput = useRef<HTMLInputElement>(null);

	const handleSaveSettings = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formErrors = [];
		const workTime = Number(workTimeInput.current?.value);
		const shortBreakTime = Number(shortBreakTimeInput.current?.value);
		const longBreakTime = Number(longBreakTimeInput.current?.value);

		if (isNaN(workTime))
			formErrors.push("Please, use only numbers for focus.");
		if (isNaN(shortBreakTime))
			formErrors.push("Please, use only numbers for short break time.");
		if (isNaN(longBreakTime))
			formErrors.push("Please, use only numbers for long break time.");

		if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
			toastWrapper.error("Type only number to all forms.");
			return;
		}

		if (workTime < 1 || workTime > 99)
			formErrors.push("Type values between 0 and 100");
		if (shortBreakTime < 1 || shortBreakTime > 30)
			formErrors.push("Type values between 1 and 30");
		if (longBreakTime < 1 || longBreakTime > 60)
			formErrors.push("Type values between 1 and 60");

		if (formErrors.length > 0) {
			toastWrapper.dismiss();
			formErrors.forEach((error) => {
				toastWrapper.error(error);
			});
			return;
		}

		dispatch({
			type: TaskActionTypes.CHANGE_SETTINGS,
			payload: { workTime, shortBreakTime, longBreakTime },
		});
		toastWrapper.success("Settings saved");
	};

	return (
		<>
			<MainTemplate>
				<Container>
					<Heading>Settings</Heading>
				</Container>
				<Container>
					<p style={{ textAlign: "center" }}>
						Change configurations for focus time, short break, and
						long break
					</p>
				</Container>

				<Container>
					<form
						className={styles.form}
						onSubmit={handleSaveSettings}>
						<div className={styles.formRow}>
							<Input
								id="workTime"
								labelText="Focus"
								ref={workTimeInput}
								defaultValue={state.config.workTime}
								type="number"
								min="1"
								max="99"
								step={2}
								maxLength={2}
							/>
						</div>
						<div className={styles.formRow}>
							<Input
								id="shortBreakTime"
								labelText="Short break time"
								ref={shortBreakTimeInput}
								defaultValue={state.config.shortBreakTime}
								type="number"
								min="1"
								max="30"
								maxLength={2}
							/>
						</div>
						<div className={styles.formRow}>
							<Input
								id="longBreakTime"
								labelText="Long break time"
								ref={longBreakTimeInput}
								defaultValue={state.config.longBreakTime}
								type="number"
								min="1"
								max="60"
								maxLength={2}
							/>
						</div>
						<div className={styles.formRow}>
							<DefaultButton
								icon={<SaveIcon />}
								aria-label="Save button"
								title="Save button"
							/>
						</div>
					</form>
				</Container>
			</MainTemplate>
		</>
	);
}
