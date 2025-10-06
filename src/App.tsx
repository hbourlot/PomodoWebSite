import './styles/global.css';
import './styles/theme.css';
import { NotFound, Home, AboutPomodoro } from './pages/index';
import { TaskContextProvider } from './contexts/TaskContext/index';


export const App = () => {

	return (
		<>
			<TaskContextProvider>
				<Home />
				{/* <NotFound /> */}
				{/* {<AboutPomodoro />} */}
			</TaskContextProvider>
		</>
	);
};

export default App;
