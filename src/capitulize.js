function capitulize(string) {
	if (typeof string != 'string') return 'Only strings accepted!';
	return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = capitulize;
