import { Container, CountDown, MainForm } from '../../components';
import { MainTemplate } from '../../templates/MainTemplate/MainTemplate';

export const Home = () => {
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
};
