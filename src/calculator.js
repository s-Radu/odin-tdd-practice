function add(a, b) {
	const result = validateInput(a, b);
	if (typeof result === 'string') {
		return result;
	} else {
		return result.a + result.b;
	}
}

function substract(a, b) {
	const result = validateInput(a, b);
	if (typeof result === 'string') {
		return result;
	} else {
		return result.a - result.b;
	}
}

function multiply(a, b) {
	const result = validateInput(a, b);
	if (typeof result === 'string') {
		return result;
	} else {
		return result.a * result.b;
	}
}

function divide(a, b) {
	const result = validateInput(a, b);
	if (typeof result === 'string') {
		return result;
	} else {
		return result.a / result.b;
	}
}

module.exports = {add, substract, multiply, divide};

function validateInput(a, b) {
	if (
		isNaN(a) ||
		isNaN(b) ||
		a == null ||
		b == null ||
		typeof a === 'string' ||
		typeof b === 'string'
	) {
		return 'Only numbers accepted!';
	} else {
		return {a: a, b: b};
	}
}
