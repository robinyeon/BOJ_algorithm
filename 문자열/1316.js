// 그룹 단어 체커

let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let num = Number(input[0]);
let count = 0;

for (let i = 1; i <= num; i++) {
    let word = input[i];
    let letterArr = [];
    let isGroupWord = true;

    for (let j = 0; j < word.length; j++) {
        if (letterArr.indexOf(word[j]) === -1) {
            letterArr.push(word[j]);
        } else {
            if (letterArr.indexOf(word[j]) !== letterArr.length - 1) {
                isGroupWord = false;
                break;
            }
        }
    }

    if (isGroupWord) {
        count++;
    }
}

console.log(count);
