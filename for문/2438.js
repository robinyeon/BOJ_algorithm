// 별 찍기 - 1

let input = require("fs").readFileSync("/dev/stdin").toString().trim();
let number = Number(input);
let answer = "";

for (let i = 1; i <= number; i++) {
    answer += "*";
    console.log(answer);
}
