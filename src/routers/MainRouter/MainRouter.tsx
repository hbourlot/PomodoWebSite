import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "../../components/ScrollToTop/ScrollToTop";
import { Home, NotFound, AboutPomodoro } from "../../pages";
import { MultiRoute } from "../../utils/MultiRoute";

export const RouterPaths = {
	HOME: ["/", "/home"],
	ABOUT_POMODORO: "/about",
	NOT_FOUND: "*",
};

export function MainRouter() {
	return (
		<>
			<BrowserRouter>
				<ScrollToTop />
				<Routes>
					{MultiRoute(RouterPaths.HOME, <Home />)}
					<Route
						path={RouterPaths.NOT_FOUND}
						element={<NotFound />}
					/>
					<Route
						path={RouterPaths.ABOUT_POMODORO}
						element={<AboutPomodoro />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}
