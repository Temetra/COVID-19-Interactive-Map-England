export function createTimer() {
	let timerRef = null;

	let waitFor = (ms) => {
		return new Promise((resolve, reject) => {
			if (timerRef) reject("Timer already running");
			timerRef = setTimeout(() => {
				timerRef = null;
				resolve();
			}, ms);
		});
	};

	let cancel = () => {
		clearTimeout(timerRef);
		timerRef = null;
	};

	return { waitFor, cancel };
}
