
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "../../components/ScrollTop/ScrollToTop";
import { Home, NotFound, AboutPomodoro } from "../../pages";
import { MultiRoute } from "../../utils/MultiRoute";

export function MainRouter() {
	return (
		<>
			<BrowserRouter>
				<ScrollToTop />
				<Routes>
					{MultiRoute(["/", "/home"], <Home />)}
					<Route
						path="*"
						element={<NotFound />}
					/>
					<Route
						path="/about"
						element={<AboutPomodoro />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}
