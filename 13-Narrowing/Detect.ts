function detectType(val: number | string) {
	if (typeof val === 'string') {
		return val.toUpperCase();
	}
	return val + 3;
}
