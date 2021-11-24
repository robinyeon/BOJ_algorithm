// 구구단

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    let input = Number(line);

    for (let i = 1; i < 10; i++) {
        console.log(`${input} * ${i} = ${input * i}`)
    };
}).on("close", () => {
    process.exit();
});