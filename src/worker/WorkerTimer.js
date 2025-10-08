onmessage = (e) => {
	let { secondsRemaining } = e.data;

	// ✅ Immediately send the starting value (e.g., 1500)
	self.postMessage(secondsRemaining);

	function tick() {
		secondsRemaining--;

		self.postMessage(secondsRemaining);
		setTimeout(tick, 1000);
	}

	setTimeout(tick, 1000);
};
