import { CirclePlayIcon } from 'lucide-react';
import { Input, DefaultButton, Cycles } from '../index.tsx';

export const MainForm = () => {
	return (
		<div>
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
					<DefaultButton icon={<CirclePlayIcon />} color='green' />
				</div>
			</form>
		</div>
	);
};
