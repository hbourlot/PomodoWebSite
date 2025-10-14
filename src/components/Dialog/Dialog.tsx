import { ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";
import type { ToastContentProps } from "react-toastify";
import { DefaultButton } from "../DefaultButton/DefaultButton";

import styles from "./styles.module.css";

export function Dialog({ data, closeToast }: ToastContentProps<string>) {
	return (
		<>
			<div className={styles.container}>
				<p>{data}</p>

				<div className={styles.buttonsContainer}>
					<DefaultButton
						onClick={() => closeToast(true)}
						icon={<ThumbsUpIcon />}
						aria-label="Confirm action and close"
						title="Confirm action and close"
					/>
					<DefaultButton
						onClick={() => closeToast(false)}
						icon={<ThumbsDownIcon />}
						color="red"
						aria-label="Cancel action and close"
						title="Cancel action and close"
					/>
				</div>
			</div>
		</>
	);
}
