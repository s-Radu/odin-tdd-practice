const caesarCipher = require('../src/caesarChiper');

describe('caesarCipher function', () => {
	describe('Encript', () => {
		test('basic shift', () => {
			expect(caesarCipher('abc', 2)).toBe('cde');
		});

		test('wraparound shift', () => {
			expect(caesarCipher('xyz', 3)).toBe('abc');
		});

		test('negative shift', () => {
			expect(caesarCipher('abc', -1)).toBe('zab');
		});

		test('large shift', () => {
			expect(caesarCipher('abc', 26)).toBe('abc'); // Shift of a full alphabet cycle
		});

		test('non-alphabetic characters remain unchanged', () => {
			expect(caesarCipher('abc123', 2)).toBe('cde123');
		});

		test('case sensitivity is preserved', () => {
			expect(caesarCipher('AbC', 2)).toBe('CdE');
		});
	});

	describe('caesarCipher decryption', () => {
		test('basic decryption', () => {
			expect(caesarCipher('cde', 2, true)).toBe('abc');
		});

		test('wraparound decryption', () => {
			expect(caesarCipher('abc', 3, true)).toBe('xyz');
		});

		test('negative shift decryption', () => {
			expect(caesarCipher('zab', -1, true)).toBe('abc');
		});

		test('large shift decryption', () => {
			expect(caesarCipher('abc', 26, true)).toBe('abc'); // Shift of a full alphabet cycle
		});

		test('decryption with non-alphabetic characters', () => {
			expect(caesarCipher('cde123', 2, true)).toBe('abc123');
		});

		test('decryption preserving case sensitivity', () => {
			expect(caesarCipher('CdE', 2, true)).toBe('AbC');
		});
	});
});
