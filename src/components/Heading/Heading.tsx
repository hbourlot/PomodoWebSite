import React from 'react';
import Container from '../Container/Container';
import styles from './styles.module.css';

type HeadingProps = {
	children: React.ReactNode;
};

export const Heading = ({ children }: HeadingProps) => {
	return (
		<Container>
			<h1 className={styles.container}>{children}</h1>
		</Container>
	);
};
