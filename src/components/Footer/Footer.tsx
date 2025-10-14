import styles from "./styles.module.css";
import { RouterLink } from "../RouterLink/RouterLink";

export function Footer() {
	return (
		<>
			<div className={styles.footer}>
				<RouterLink
					href="/about"
					className={styles.white}
				>
					Pomodoro Tech 🍒
				</RouterLink>
				<RouterLink href="/about">
					Chronos Pomodoro &copy; {new Date().getFullYear()}
				</RouterLink>
			</div>
		</>
	);
}
