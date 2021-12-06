// 상수

let input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

let a = Number(input[0].split("").reverse().join(""));
let b = Number(input[1].split("").reverse().join(""));

console.log(a > b ? a : b);
// console.log(Math.max(a,b));

