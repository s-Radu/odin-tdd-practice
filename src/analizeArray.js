function analyzeArray(arr) {
	function calculateAverage() {
		return arr.length === 0 ? NaN : arr.reduce((a, b) => a + b) / arr.length;
	}

	function findMinimum() {
		return arr.length === 0 ? undefined : Math.min(...arr);
	}

	function findMaximum() {
		return arr.length === 0 ? undefined : Math.max(...arr);
	}

	return {
		average: calculateAverage(),
		min: findMinimum(),
		max: findMaximum(),
		length: arr.length,
	};
}

module.exports = analyzeArray;

