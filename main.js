arr = [1, 3, 5];
sum = arr.reduce((previous, current) => {
	console.log(`prev = ${previous}`);
	return previous + current;
}, 3);
console.log(`sum = ${sum}`);
