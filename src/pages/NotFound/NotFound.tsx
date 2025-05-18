import React from 'react';
import { MainTemplate } from '../../templates/MainTemplate/MainTemplate';
import { Container, Heading } from '../../components';
import { GenericHtml } from '../../components/GenericHtml/GenericHtml';

export const NotFound = () => {
	return (
		<MainTemplate>
			<Container>
				<GenericHtml>
					<Heading>404 - Page Not Found 🚀</Heading>
					<p>
						Ups! It looks like the page you're trying to access
						doesn't exist. Maybe it went on vacation, decided to
						explore the universe, or got lost somewhere between two
						black holes. 🌌
					</p>
					<p>
						But don't worry, you're not lost in space (yet). You can
						safely return to the <a href='/'>home page</a> or{' '}
						<a href='/history'>history</a> — or stay here and
						pretend you found a secret page that only the coolest
						explorers can access. 🧭✨
					</p>
					<p>
						If you think this page should exist (or if you want to
						chat about time travel and wormholes), just get in
						touch. Otherwise, use the menu to return to reality.
					</p>
					<p>
						In the meantime, here's a thought: "If a page doesn't
						exist on the internet, did it ever really exist?" 🤔💭
					</p>
				</GenericHtml>
			</Container>
		</MainTemplate>
	);
};
