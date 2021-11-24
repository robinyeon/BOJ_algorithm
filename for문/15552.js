// 빠른 A+B

let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let answer = "";

for (let i = 1; i <= Number(input[0]); i++) {
    let numbers = input[i].split(" ");
    answer += Number(numbers[0]) + Number(numbers[1]) + "\n"
};
console.log(answer)

// 매번 console.log 출력 시 시간초과, 하나의 문자열에 A+B와 개행문자를 저장하여 마지막에 한 번 출력함