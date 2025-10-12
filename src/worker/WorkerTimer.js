let isRunning = false;

onmessage = (e) => {
	if (isRunning) return;

	isRunning = true;
	let { secondsRemaining } = e.data;

	self.postMessage(secondsRemaining);

	function tick() {
		secondsRemaining--;

		self.postMessage(secondsRemaining);
		setTimeout(tick, 1000);
	}

	tick();
};
