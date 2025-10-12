import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { RouterPaths } from "../../routers/MainRouter/MainRouter";

let currentlyInAbout = false;

export function ScrollToTop() {
	const { pathname } = useLocation();

	if (pathname === RouterPaths.ABOUT_POMODORO)
		currentlyInAbout = !currentlyInAbout;

	console.log("CURRENT: ", currentlyInAbout);

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [pathname, currentlyInAbout]);

	return null;
}
