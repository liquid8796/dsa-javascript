const a = [1, 3, 2];
const b = [1, 2];
b.forEach((el) => {
    a.indexOf(el) !== -1 && a.splice(a.indexOf(el), 1);
});

console.log(result);
