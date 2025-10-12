import MainTemplate from "../../templates/MainTemplate/MainTemplate";
import { Heading } from "../../components/Heading/Heading";
import { Container } from "../../components/Container/Container";
import { GenericHtml } from "../../components/GenericHtml/GenericHtml";
import { RouterLink } from "../../components";

export function NotFound() {
	return (
		<MainTemplate>
			<Container>
				<GenericHtml>
					<Heading>404 - Page Not Found 🚀</Heading>
					<p>
						Oops! It looks like the page you're trying to access
						doesn't exist. Maybe it went on vacation, decided to
						explore the universe, or got lost somewhere between two
						black holes. 🌌
					</p>
					<p>
						But relax, you're not lost in space (yet). You can
						safely go back to the
						<RouterLink href="/"> main page</RouterLink> or{" "}
						<RouterLink href="/history">the history</RouterLink> —
						or you can stay here and pretend you’ve found a secret
						page that only the coolest explorers can access. 🧭✨
					</p>
					<p>
						If you think this page should exist (or if you’d like to
						chat about time travel and wormholes), just get in
						touch. Otherwise, use the menu to return to the real
						world.
					</p>
					<p>
						Meanwhile, here’s something to think about: "If a page
						doesn’t exist on the internet, did it ever really
						exist?" 🤔💭
					</p>
				</GenericHtml>
			</Container>
		</MainTemplate>
	);
}
