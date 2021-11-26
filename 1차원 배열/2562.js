// 최댓값

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

let max = Math.max(...input)

console.log(max);
console.log(input.indexOf(max) + 1);

//or
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

// let max = input[0];
// let maxIndex = 0;

// for (let i = 1; i < 9; i++) {
//     if (max < input[i]) {
//         max = input[i];
//         maxIndex = i;
//     }
// }

// console.log(max);
// console.log(maxIndex + 1);

