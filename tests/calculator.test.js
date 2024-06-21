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

// Substraction

test('Substraction of two numbers', () => {
	expect(substract(7, 5)).toBe(2);
});

test('Substract two negative numbers', () => {
	expect(substract(-12, -7)).toBe(-5);
});

test('Refuse anything that is not a number', () => {
	expect(substract(9, 'a')).toBe('Only numbers accepted!');
});

test('Refuse undefined', () => {
	expect(substract(undefined + 4)).toBe('Only numbers accepted!');
});

test('Refuse null', () => {
	expect(substract(null + 4)).toBe('Only numbers accepted!');
});

test('Refuse string containing number', () => {
	expect(substract(8, '8')).toBe('Only numbers accepted!');
});

// Multiplication

test('Multiplication of two numbers', () => {
	expect(multiply(6, 3)).toBe(18);
});

test('Multiplication with negative number', () => {
	expect(multiply(7, -5)).toBe(-35);
});

test('Refuse anything that is not a number', () => {
	expect(multiply(9, 'a')).toBe('Only numbers accepted!');
});

test('Refuse undefined', () => {
	expect(multiply(undefined + 4)).toBe('Only numbers accepted!');
});

test('Refuse null', () => {
	expect(multiply(null + 4)).toBe('Only numbers accepted!');
});

test('Refuse string containing number', () => {
	expect(multiply(8, '8')).toBe('Only numbers accepted!');
});
