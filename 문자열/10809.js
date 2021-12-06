// 알파벳 찾기

let input = require("fs").readFileSync("/dev/stdin").toString().trim();

let answerArr = [];

for (let i = 97; i <= 122; i++) {
    answerArr.push(input.indexOf(String.fromCharCode(i)))
}

console.log(answerArr.join(" "));