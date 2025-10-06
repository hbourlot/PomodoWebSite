import React from 'react';
import styles from './styles.module.css';

export function Footer() {
	return (
		<>
			<div className={styles.footer}>
				<a href='' className={styles.white}>Pomodoro Tech</a>
				<a href=''>
					Chronos Pomodoro &copy; {new Date().getFullYear()}
				</a>
			</div>
		</>
	);
}
