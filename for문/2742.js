// 기찍 N

let input = require("fs").readFileSync("/dev/stdin").toString().trim();
let number = Number(input);
let answer = "";

for (let i = number; i >= 1; i--) {
    answer += i + "\n";
}

console.log(answer);