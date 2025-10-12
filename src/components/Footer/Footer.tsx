import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export function Footer() {
	return (
		<>
			<div className={styles.footer}>
				<Link
					to="/about"
					className={styles.white}
				>
					Pomodoro Tech 🍒
				</Link>
				<Link to="/about">
					Chronos Pomodoro &copy; {new Date().getFullYear()}
				</Link>
			</div>
		</>
	);
}
