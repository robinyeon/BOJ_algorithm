// A + B -5

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let answer = "";

for (let i = 0; i <= input.length - 2; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    answer += (a + b) + "\n";
}

console.log(answer);