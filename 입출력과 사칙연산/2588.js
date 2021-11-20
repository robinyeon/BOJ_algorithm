// 곱셈

const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const [a, b] = input;
console.log(a * b.toString()[2]);
console.log(a * b.toString()[1]);
console.log(a * b.toString()[0]);
console.log(a * b);


