const capitulize = require('../src/capitulize');
describe('Capitulaze tests', () => {
	test('Check for number', () => {
		expect(capitulize(12345)).toBe('Only strings accepted!');
	});

	test('Capitulize first letter', () => {
		expect(capitulize('sarmale')).toBe('Sarmale');
	});

	test('Capitulize empty string', () => {
		expect(capitulize('')).toBe('');
	});

	test('Capitulize string starting with a number', () => {
		expect(capitulize('1da?')).toBe('1da?');
	});

	test('Test for null ', () => {
		expect(capitulize(null)).toBe('Only strings accepted!');
	});

	test('Test for undefined ', () => {
		expect(capitulize(undefined)).toBe('Only strings accepted!');
	});

	test('Test for capitulized input ', () => {
		expect(capitulize('Sarmale')).toBe('Sarmale');
	});
});
