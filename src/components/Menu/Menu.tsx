import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import {
	HistoryIcon,
	SettingsIcon,
	SunIcon,
	HouseIcon,
	MoonIcon,
} from "lucide-react";
import { RouterLink } from "../RouterLink/RouterLink";

type availableThemes = "light" | "dark";

const themeIcon: Record<availableThemes, React.ReactNode> = {
	light: <SunIcon />,
	dark: <MoonIcon />,
};

export const Menu = () => {
	const [theme, setTheme] = useState<availableThemes>(() => {
		let storageTheme =
			(localStorage.getItem("theme") as availableThemes) || "dark";
		return storageTheme;
	});

	const handleThemeChange = (
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		event.preventDefault();
		setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
	};

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);

		localStorage.setItem("theme", theme);

		return () => {
			// console.log('Clean Garbage.');
		};
	}, [theme]);

	return (
		<nav className={styles.menu}>
			<RouterLink
				href="/"
				aria-label="Go to home"
				title="Go to home"
				className={styles.menuLink}
			>
				<HouseIcon />
			</RouterLink>
			<RouterLink
				href="#"
				aria-label="Go to history"
				title="Go to history"
				className={styles.menuLink}
			>
				<HistoryIcon />
			</RouterLink>
			<RouterLink
				href="#"
				arial-label="Go to settings"
				title="Go to settings"
				className={styles.menuLink}
			>
				<SettingsIcon />
			</RouterLink>
			<RouterLink
				href="#"
				aria-label="Set dark theme"
				title="Set dark theme"
				className={styles.menuLink}
				onClick={handleThemeChange}
			>
				{/* {theme === 'dark' ? <MoonIcon /> : <SunIcon />} */}
				{themeIcon[theme]}
			</RouterLink>
		</nav>
	);
};
