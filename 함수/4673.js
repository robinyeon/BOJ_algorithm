// 셀프 넘버

const d = (n) => {
    let sum = 0;
    for (let i = 0; i < String(n).length; i++) {
        sum += Number(String(n)[i]);
    }
    return sum + n;
}

const trueArr = Array(10001).fill(true);

for (let i = 0; i < 10001; i++) {
    trueArr[d(i)] = false;
}

for (let i = 1; i < 10000; i++) {
    if (trueArr[i]) {
        console.log(i);
    }
}


