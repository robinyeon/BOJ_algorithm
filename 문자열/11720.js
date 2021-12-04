// 숫자의 합

let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let n = Number(input[0]); // number
let numbers = input[1]; // string

let sum = 0;
for (let i = 0; i < n; i++) {
    sum += Number(numbers[i]);
}

console.log(sum);