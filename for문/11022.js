// A + B - 8

let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let num = Number(input[0]);
let answer = "";

for (let i = 1; i <= num; i++) {
    let numbers = input[i].split(" ");
    answer += `Case #${i}: ${Number(numbers[0])} + ${Number(numbers[1])} = ${Number(numbers[0]) + Number(numbers[1])}` + "\n";
}

console.log(answer);