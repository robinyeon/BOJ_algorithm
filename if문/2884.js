// 알람 시계

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// let input = [];

rl.on("line", (line) => {
    let input = line.split(" ");
    let H = Number(input[0]);
    let M = Number(input[1]);

    if (M - 45 < 0) {
        M += 15;
        H -= 1;

        if (H === -1) {
            H = 23;
        }
    } else {
        M -= 45;
    }
    console.log(H + " " + M);
}).on("close", () => {
    process.exit();
})
