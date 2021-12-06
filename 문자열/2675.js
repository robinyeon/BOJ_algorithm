// 문자열 반복

let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input[0]);

for (let i = 1; i <= n; i++) {
    let [r, s] = input[i].split(" ");

    let repeatedWord = "";
    for (let j = 0; j < s.length; j++) {
        repeatedWord += s[j].repeat(Number(r));
    };
    console.log(repeatedWord);
}