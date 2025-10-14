import { useEffect } from "react";
import { GenericHtml } from "../../components/GenericHtml/GenericHtml";
import { Heading, Container, RouterLink } from "../../components/index";
import MainTemplate from "../../templates/MainTemplate/MainTemplate";

export function AboutPomodoro() {
	useEffect(() => {
		document.title = "About - Pomodoro";
	}, []);

	return (
		<MainTemplate>
			<Container>
				<GenericHtml>
					<Heading>The Pomodoro Technique 🍅</Heading>

					<p>
						The Pomodoro Technique is a productivity method created
						by
						<strong> Francesco Cirillo</strong>. It consists of
						dividing work into time blocks (the famous "Pomodoros")
						interspersed with breaks. The goal is to stay fully
						focused for a short period while ensuring rest to avoid
						mental fatigue.
					</p>

					<img
						src="https://placehold.co/1920x1080"
						alt=""
					/>

					<h2>How does the traditional Pomorodo works?</h2>

					<ul>
						<li>
							<strong>1. Choose a task</strong> you want to work
							on.
						</li>
						<li>
							<strong>2. Work on it for 25 minutes</strong>{" "}
							without interruptions.
						</li>
						<li>
							<strong>3. Take a short 5-minute break</strong>.
						</li>
						<li>
							<strong>
								4. After 4 cycles, take a long break
							</strong>
							(usually 15 to 30 minutes).
						</li>
					</ul>

					<h2>
						But <strong>Chronos Pomodoro</strong> has something
						extra 🚀
					</h2>

					<p>
						Out app follows the original concept, but with some
						improvements and customizations to make the process even
						more efficient:
					</p>

					<h3>⚙️ Time customization</h3>
					<p>
						You can set your own focus time, short breaks, and long
						breaks! Just go to the{" "}
						<RouterLink href="/settings">settings page</RouterLink>{" "}
						and adjust the minutes however you prefer.
					</p>

					<h3>🔁 Organized cycles in sequence</h3>
					<p>
						Every time you complete a cycle, a new task is
						automatically added to your history, and the app already
						suggests the next cycle (focus or break).
					</p>
					<p>
						<strong>Our default:</strong>
					</p>
					<ul>
						<li>
							<strong>Odd cycles</strong>: Work (focus).
						</li>
						<li>
							<strong>Even cycles</strong>: Short break.
						</li>
						<li>
							<strong>Cycle 8</strong>: Special long break to
							reset the full cycle.
						</li>
					</ul>
					<h3>🍅 Cycle visualization</h3>
					<p>
						Right below the timer, you’ll see colored dots
						representing the cycles:
					</p>
					<ul>
						<li>🟡 Yellow: Work cycle (focus).</li>
						<li>🟢 Green: Short break.</li>
						<li>🔵 Blue: Long break (appears every 8 cycles).</li>
					</ul>

					<p>
						This way, you always know exactly where you are in the
						process and what’s coming next. No more writing it down
						on paper or calculating in your head!
					</p>

					<h3>📊 Automatic history</h3>
					<p>
						All your completed cycles and tasks are saved in your
						<RouterLink href="/history"> history</RouterLink>,
						marked as completed or interrupted. That way, you can
						track your progress over time.
					</p>

					<h2>Why use Chronos Pomodoro?</h2>
					<ul>
						<li>✅ Organize your focus clearly.</li>
						<li>✅ Work and rest in the right balance.</li>
						<li>✅ Customize your own cycles and timings.</li>
						<li>✅ Track your history automatically.</li>
					</ul>

					<p>
						<strong>Ready to focus?</strong> Let’s go back to the
						<RouterLink href="/"> home page</RouterLink> and start
						your Pomodoros! 🍅🚀
					</p>

					<p>
						<em>"Total focus, no rush, no pause, just go!"</em> 💪🧘‍♂️
					</p>
				</GenericHtml>
			</Container>
		</MainTemplate>
	);
}
