import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "../../components/ScrollToTop/ScrollToTop";
import { Home, NotFound, AboutPomodoro, History } from "../../pages";
import { MultiRoute } from "../../utils/MultiRoute";
import { Settings } from "../../pages/Settings/Settings";
import { RouterPaths } from "./RouterPaths";

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
					<Route
						path={RouterPaths.HISTORY}
						element={<History />}
					/>
					<Route
						path={RouterPaths.SETTINGS}
						element={<Settings />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}
