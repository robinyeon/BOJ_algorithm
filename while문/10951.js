// A + B - 4

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let answer = "";

for (let i = 0; i <= input.length - 1; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    answer += (a + b) + "\n";
}

console.log(answer);