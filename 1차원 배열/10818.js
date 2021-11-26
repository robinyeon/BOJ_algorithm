// 최소, 최대

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);

let newArr = arr.sort((a, b) => a - b);
let min = newArr[0];
let max = newArr[newArr.length - 1];

console.log(min, max);

// or
// let min = numbers[0];
// let max = numbers[0];

// for (let i = 1; i < N; i++) {
//     if (min > numbers[i]) {
//         min = numbers[i];
//     }

//     if (max < numbers[i]) {
//         max = numbers[i];
//     }
// }
// console.log(min, max);
