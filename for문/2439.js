// 별 찍기 - 2

let input = require("fs").readFileSync("/dev/stdin").toString().trim();
let number = Number(input);

for (let i = 1; i <= number; i++) {
    let star = " ".repeat(number - i) + "*".repeat(i);
    console.log(star);
}