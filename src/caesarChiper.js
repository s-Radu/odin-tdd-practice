function caesarCipher(str, shift, decrypt = false) {
	// Adjust shift for decryption or ensure it's positive for encryption
	const effectiveShift = decrypt ? (26 - shift) % 26 : shift;
	// Normalize shift to be within the range of 0-25
	const normalizedShift =
		effectiveShift > 0 ? effectiveShift : 26 + (effectiveShift % 26);

	return [...str]
		.map((char, index) => {
			const charCode = str.charCodeAt(index);

			// Shift uppercase letters
			if (charCode >= 65 && charCode <= 90) {
				return String.fromCharCode(
					((charCode - 65 + normalizedShift) % 26) + 65
				);
			}

			// Shift lowercase letters
			if (charCode >= 97 && charCode <= 122) {
				return String.fromCharCode(
					((charCode - 97 + normalizedShift) % 26) + 97
				);
			}

			// Return non-alphabetic characters unchanged
			return char;
		})
		.join('');
}

module.exports = caesarCipher;
