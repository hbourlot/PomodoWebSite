import { MainTemplate } from "../../templates/MainTemplate/MainTemplate";
import { Container, CountDown, MainForm } from "../../components/index";
import { useEffect } from "react";

export function Home() {
	useEffect(() => {
		document.title = "Home - Pomodoro";
	}, []);
	return (
		<>
			<MainTemplate>
				<Container>
					<CountDown />
				</Container>

				<Container>
					<MainForm />
				</Container>
			</MainTemplate>
		</>
	);
}
