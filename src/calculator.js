function add(a, b) {
	if (
		isNaN(a) ||
		isNaN(b) ||
		a == null ||
		b == null ||
		typeof a === 'string' ||
		typeof b === 'string'
	)
		return 'Only numbers accepted!';

	return a + b;
}

function substract(a, b) {
	if (
		isNaN(a) ||
		isNaN(b) ||
		a == null ||
		b == null ||
		typeof a === 'string' ||
		typeof b === 'string'
	)
		return 'Only numbers accepted!';

	return a - b;
}

function multiply(a, b) {}
function divide(a, b) {}

module.exports = {add, substract, multiply, divide};
