// 합

let input = require("fs").readFileSync("/dev/stdin").toString().trim();
let number = Number(input);
let sum = 0;
for (let i = 1; i <= number; i++) {
    sum += i;
};
console.log(sum);