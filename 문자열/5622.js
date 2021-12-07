// 다이얼

let word = require("fs").readFileSync("/dev/stdin").toString().trim();

let count = 0;
for (let i = 0; i < word.length; i++) {
    let alphabetNum = word.charCodeAt(i);
    if (alphabetNum >= 65 && alphabetNum <= 67) {
        count += 3;
    } else if (alphabetNum >= 68 && alphabetNum <= 70) {
        count += 4;
    } else if (alphabetNum >= 71 && alphabetNum <= 73) {
        count += 5;
    } else if (alphabetNum >= 74 && alphabetNum <= 76) {
        count += 6;
    } else if (alphabetNum >= 77 && alphabetNum <= 79) {
        count += 7;
    } else if (alphabetNum >= 80 && alphabetNum <= 83) {
        count += 8;
    } else if (alphabetNum >= 84 && alphabetNum <= 86) {
        count += 9;
    } else {
        count += 10;
    }
}

console.log(count);

