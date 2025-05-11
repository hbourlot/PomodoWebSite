import { CirclePlayIcon } from 'lucide-react';
import {
	Container,
	Logo,
	Menu,
	CountDown,
	Input,
	Cycles,
	DefaultButton,
	Footer,
} from './components/index';

import './styles/global.css';
import './styles/theme.css';

export const App = () => {
	return (
		<>
			<Container>
				<Logo />
			</Container>

			<Container>
				<Menu />
			</Container>

			<Container>
				<CountDown />
			</Container>

			<Container>
				<form className='form' action=''>
					<div className='formRow'>
						<Input
							labelText='Task:'
							id='myInput'
							type='text'
							title='title'
							placeholder='Type here'
						/>
					</div>

					<div className='formRow'>
						<p>Lorem ipsum dolor sit amet.</p>
					</div>

					<div className='formRow'>
						<Cycles />
					</div>
					<div>
						<DefaultButton
							icon={<CirclePlayIcon />}
							color='green'
						/>
					</div>
				</form>
			</Container>
			<Container>
				<Footer />
			</Container>
		</>
	);
};

export default App;
