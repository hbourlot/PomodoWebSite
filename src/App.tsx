import "./styles/global.css";
import "./styles/theme.css";
import { TaskContextProvider } from "./contexts/TaskContext/index";
import { ToastWrapper } from "./components/ToastContainer/ToastContainer";
import { MainRouter } from "./routers/MainRouter/MainRouter";

export const App = () => {
	return (
		<>
			<TaskContextProvider>
				<ToastWrapper>
					<MainRouter />
				</ToastWrapper>
			</TaskContextProvider>
		</>
	);
};

export default App;
