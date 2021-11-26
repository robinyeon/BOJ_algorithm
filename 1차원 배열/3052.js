// 나머지

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);


// (1) Set 사용
// let restArr = input.map(el => {
//     return el % 42;
// })
// let restSet = new Set(restArr);
// let answer = [...restSet]
// console.log(answer.length);

// (2) .indexOf() 사용
let answerArr = [];

input.forEach(el => {
    const rest = el % 42;

    if (answerArr.indexOf(rest) === -1) {
        answerArr.push(rest);
    }
})

console.log(answerArr.length);