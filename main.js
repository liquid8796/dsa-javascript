const arr1 = [0, 1, 2, [3, 4]];
const arr2 = [0, 1, [2, [3, [4, 5]]]];

const result = arr2.flat(9);
console.log(result);
