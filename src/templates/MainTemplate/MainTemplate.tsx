import { Logo, Container, Menu, Footer } from '../../components/index';

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

export default MainTemplate;
