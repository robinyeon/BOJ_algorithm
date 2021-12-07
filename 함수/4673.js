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

for (let i = 1; i < 10001; i++) {
    if (trueArr[i]) {
        console.log(i);
    }
}


// d(n)함수를 만들때 sum을 따로 만들어 return sum+n을 하지 않고,
// n+= Number(String(n)[i])으로 return n을 하게 하니 출력초과 됨.

