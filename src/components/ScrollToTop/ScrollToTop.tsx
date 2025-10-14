import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { RouterPaths } from "../../routers/MainRouter/RouterPaths";

export function ScrollToTop() {
	const { pathname } = useLocation();

	if (pathname === RouterPaths.ABOUT_POMODORO)
		window.scrollTo({ top: 0, behavior: "smooth" });

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [pathname]);

	return null;
}
