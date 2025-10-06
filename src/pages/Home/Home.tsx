import { MainTemplate } from '../../templates/MainTemplate/MainTemplate';
import { Container, CountDown, MainForm } from '../../components/index';

export function Home() {
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
