// 평균은 넘겠지

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
// ["2", "5 50 50 70 80 100", "7 100 95 90 80 70 60 50"]

const N = Number(input[0]);

for (let i = 1; i <= N; i++) {
    let oneLine = input[i].split(" ").map(Number);
    // [5, 50, 50, 70, 80, 100]
    let num = oneLine[0];

    let scores = oneLine.slice(1);
    // [50, 50, 70, 80, 100]
    let sum = scores.reduce((acc, cur) => {
        return acc + cur;
    }, 0)

    let average = sum / num;

    let betterScores = scores.filter(score => score > average);

    let answer = (betterScores.length / num * 100).toFixed(3)

    console.log(`${answer}%`);
}