// X보다 작은 수

let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let [N, X] = input[0].split(" ").map(Number);
let numArr = input[1].split(" ").map(Number);

let answer = "";

for (let i = 0; i < N; i++) {
    if (numArr[i] < X) {
        answer += numArr[i] + " ";
    }
}

console.log(answer);