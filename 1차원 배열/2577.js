// 숫자의 개수

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
let [a, b, c] = input;
let multiStr = (a * b * c).toString();


for (let i = 0; i < 10; i++) {
    let count = 0;

    for (let j = 0; j < multiStr.length; j++) {
        if (Number(multiStr[j]) === i) {
            count++;
        }
    }
    console.log(count);
}

