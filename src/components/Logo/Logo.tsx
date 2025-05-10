import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';

export const Logo = () => {
	return (
		<>
			<h1 className={styles.logo}>
				<a href='#' className={styles['logo-link']}>
					<TimerIcon />
					<span>Chronos</span>
				</a>
			</h1>
		</>
	);
};
