let myWorker: TimerWorkerManager | null = null;

export class TimerWorkerManager {
	private worker: Worker;

	private constructor() {
		this.worker = new Worker(new URL("./WorkerTimer.js", import.meta.url));
	}

	static getInstance() {
		if (!myWorker) {
			myWorker = new TimerWorkerManager();
		}

		return myWorker;
	}

	postMessage(message: any) {
		this.worker.postMessage(message);
	}

	onmessage(callBack: (e: MessageEvent<any>) => void) {
		this.worker.onmessage = callBack;
	}

	terminate() {
		this.worker.terminate();
		myWorker = null;
	}
}
