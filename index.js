const add = (...numbers) => numbers.reduce((x, y) => x + y);
const sub = (a, b) => a - b;
const mul = (...numbers) => numbers.reduce((x, y) => x * y);
const div = (a, b) => a / b;

export { add, sub, mul, div };
