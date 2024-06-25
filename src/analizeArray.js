function analyzeArray(arr) {
	function avg() {
		if (arr.length === 0) {
			return NaN;
		} else {
			return arr.reduce((a, b) => a + b) / arr.length;
		}
	}

	function min() {
		if (arr.length === 0) {
			return undefined;
		} else {
			return Math.min(...arr);
		}
	}
	function max() {
		if (arr.length === 0) {
			return undefined;
		} else {
			return Math.max(...arr);
		}
	}

	return {
		average: avg(),
		min: min(),
		max: max(),
		length: arr.length,
	};
}

module.exports = analyzeArray;
