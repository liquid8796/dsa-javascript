arr = [1, 3, 5];
max = arr.reduce((previous, current) => (previous < current ? current : previous));
console.log(`max = ${max}`);
