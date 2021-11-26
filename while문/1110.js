const input = require("fs").readFileSync("/dev/stdin").toString().trim();
let num = Number(input);
let sum = Number();
let i = 0;
while (true) {
    i++;

    sum = Math.floor(num / 10) + (num % 10);
    num = (num % 10) * 10 + (sum % 10);

    if (num === Number(input)) {
        break;
    }
}

console.log(i);