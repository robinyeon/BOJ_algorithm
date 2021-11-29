// OX퀴즈

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
// ["2", "OOXXOXXOOO", "OOXXOOXXOO"]

const N = Number(input[0]);

for (let i = 1; i <= N; i++) {
    let count = 0;
    let sum = 0;

    for (let j = 0; j < input[i].length; j++) {
        if (input[i][j] === "O") {
            count += 1;
        } else {
            count = 0;
        }
        sum += count;
    }

    console.log(sum);
}