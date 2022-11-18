export const capitalLetter = (string: string): string => {
	const arr = Array.from(string);
	const firstLetter = arr.slice(0, 1).toString().toUpperCase();
	arr.splice(0, 1, firstLetter);
	return arr.join('');
};
