const {add, substract, multiply, divide} = require('../src/calculator');
// Addition

test('Sum two numbers', () => {
	expect(add(2, 2)).toBe(4);
});

test('Sum negative numbers', () => {
	expect(add(-7, -5)).toBe(-12);
});

test('Refuse anything that is not a number', () => {
	expect(add('a' + 2)).toBe('Only numbers accepted!');
});

test('Refuse undefined', () => {
	expect(add(undefined + 4)).toBe('Only numbers accepted!');
});

test('Refuse null', () => {
	expect(add(null + 4)).toBe('Only numbers accepted!');
});

test('Refuse string containing number', () => {
	expect(add(8, '8')).toBe('Only numbers accepted!');
});
