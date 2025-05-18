import { Container, Menu, Logo, Footer } from '../../components/index.js';

type MainTemplateProps = {
	children: React.ReactNode;
};

export const MainTemplate = ({ children }: MainTemplateProps) => {
	return (
		<>
			<Container>
				<Logo />
			</Container>

			<Container>
				<Menu />
			</Container>

			{children}

			<Container>
				<Footer />
			</Container>
		</>
	);
};
