// 평균

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
// ["3","40 80 60"]

const N = Number(input[0]);
// 3
const originalScores = input[1].split(" ").map(Number);
// [40,80,60]

const maxScore = originalScores.sort((a, b) => b - a)[0];

const newScores = originalScores.map(originalScore => {
    return originalScore / maxScore * 100
});

const sumNewScore = newScores.reduce((acc, cur) => {
    return acc += cur;
}, 0);

console.log(sumNewScore / N);