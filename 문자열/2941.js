// 크로아티아 알파벳

let input = require("fs").readFileSync("/dev/stdin").toString().trim();

let cArr = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

const solution = (input) => {
    for (let cWord of cArr) {
        input = input.split(cWord).join("A");
    }
    return input.length;
}

console.log(solution(input));
