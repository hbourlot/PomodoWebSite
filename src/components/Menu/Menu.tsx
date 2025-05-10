import styles from './styles.module.css';
import { HistoryIcon, SettingsIcon, SunIcon, TimerIcon } from 'lucide-react';

export const Menu = () => {
	return (
		<nav className={styles.menu}>
			<a href='#' className={styles.menuLink}>
				<TimerIcon />
			</a>
			<a href='#' className={styles.menuLink}>
				<HistoryIcon />
			</a>
			<a href='#' className={styles.menuLink}>
				<SettingsIcon />
			</a>
			<a href='#' className={styles.menuLink}>
				<SunIcon />
			</a>
		</nav>
	);
};
