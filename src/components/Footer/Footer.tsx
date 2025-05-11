import styles from './styles.module.css';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<a href=''>Understand how it works Pomodoro.</a>
			<a href=''>Chronos Pomodoro &copy; {new Date().getFullYear()} </a>
		</footer>
	);
};
