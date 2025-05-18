import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import {
	HistoryIcon,
	MoonIcon,
	SettingsIcon,
	SunIcon,
	TimerIcon,
} from 'lucide-react';

type AvailableThemes = 'dark' | 'light';

const ThemeIcons = {
	dark: <SunIcon />,
	light: <MoonIcon />,
};

export const Menu = () => {
	const [theme, setTheme] = useState<AvailableThemes>(() => {
		const StorageTheme =
			(localStorage.getItem('theme') as AvailableThemes) || 'dark';

		return StorageTheme;
	});

	const HandleThemeEvent = (
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
	) => {
		event.preventDefault();

		setTheme(prevTheme => {
			const NextTheme = prevTheme === 'dark' ? 'light' : 'dark';

			return NextTheme;
		});
	};

	useEffect(() => {
		console.log('Theme has changed');
		localStorage.setItem('theme', theme);

		document.documentElement.setAttribute('data-theme', theme);

		return () => {
			console.log('This component will be updated.', Date.now());
		};
	}, [theme]);

	return (
		<nav className={styles.menu}>
			<a
				href='#'
				className={styles.menuLink}
				aria-label='Go to Home'
				title='Go to home'
			>
				<TimerIcon />
			</a>
			<a
				href='#'
				className={styles.menuLink}
				aria-label='Go to History'
				title='Go to History'
			>
				<HistoryIcon />
			</a>
			<a
				href='#'
				className={styles.menuLink}
				aria-label='Go to Settings'
				title='Go to Settings'
			>
				<SettingsIcon />
			</a>
			<a
				href='#'
				className={styles.menuLink}
				aria-label='Change Theme'
				title='Change Theme'
				onClick={HandleThemeEvent}
			>
				{ThemeIcons[theme]}
			</a>
		</nav>
	);
};
