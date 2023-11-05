const arrayLike = {
	length: 3,
	0: [1, 2],
	// Array-like objects aren't flattened
	1: { length: 2, 0: 3, 1: 4 },
	2: 5,
	3: 3, // ignored by flat() since length is 3
};
console.log(Array.prototype.flat.call(arrayLike));
// [ 1, 2, { '0': 3, '1': 4, length: 2 }, 5 ]
