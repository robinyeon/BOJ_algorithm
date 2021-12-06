// 단어 공부

let input = require("fs").readFileSync("/dev/stdin").toString().trim().toLowerCase();

let countArr = Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
    countArr[input.charCodeAt(i) - 97] += 1;
}

let max = Math.max(...countArr);
let maxIndex = countArr.indexOf(max);

let sameMaxExist = false;
for (let j = 0; j < countArr.length; j++) {
    if (countArr[j] === max && j != maxIndex) {
        sameMaxExist = true;
    }
}

console.log(sameMaxExist ? "?" : String.fromCharCode(maxIndex + 65));