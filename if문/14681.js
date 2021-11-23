// 사분면 고르기

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on("line", function (line) {
    input.push(parseInt(line));
}).on("close", function () {
    ///////////////////////////////
    const x = input[0];
    const y = input[1];

    if (x > 0 && y > 0) {
        console.log(1);
    } else if (x < 0 && y > 0) {
        console.log(2);
    } else if (x < 0 && y < 0) {
        console.log(3);
    } else if (x > 0 && y < 0) {
        console.log(4);
    }
    /////////////////////////////
    process.exit();
});


// fs모듈로는 런타임 에러가 나서 통하지 않음

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

// const [a, b] = input;

// if (a > 0 && b > 0) {
//     console.log(1);
// }
// else if (a < 0 && b > 0) {
//     console.log(2);
// }
// else if (a < 0 && b < 0) {
//     console.log(3);
// }
// else if (a > 0 && b < 0) {
//     console.log(4);
// }