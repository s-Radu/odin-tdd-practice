const analyzeArray = require('../src/analizeArray');

describe('analyzeArray', () => {
	test('returns correct average, min, max, and length for a given array', () => {
		const result = analyzeArray([1, 8, 3, 4, 2, 6]);
		expect(result).toEqual({
			average: 4,
			min: 1,
			max: 8,
			length: 6,
		});
	});

	test('works with negative numbers', () => {
		const result = analyzeArray([-2, -1, -3]);
		expect(result).toEqual({
			average: -2,
			min: -3,
			max: -1,
			length: 3,
		});
	});

	test('works with an array of one element', () => {
		const result = analyzeArray([5]);
		expect(result).toEqual({
			average: 5,
			min: 5,
			max: 5,
			length: 1,
		});
	});

	test('returns NaN for average when array is empty', () => {
		const result = analyzeArray([]);
		expect(result).toEqual({
			average: NaN,
			min: undefined,
			max: undefined,
			length: 0,
		});
	});
});
