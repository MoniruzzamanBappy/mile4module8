const a = 5, b = 6, c = 4;

if (a > b) {
    if (a > c) {
        console.log('a =', a, 'is bigger number');
    }
    else {
        console.log('c =', c, 'is bigger number');
    }
}
else {
    if (b > c) {
        console.log('b =', b, 'is bigger number');
    }
    else {
        console.log('c =', c, 'is bigger number');
    }
}

function summation(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        const element = num[i];

        sum = sum + element;
    }
    return sum;
}
const numbers = [54, 85, 68, 87, 57, 78, 6546, 464, 54, 44, 21, 22, 36];
const mysum = summation(numbers);
console.log('array sum is =', mysum);

function max(num1) {
    let maxNumber = num1[0];
    for (let i = 0; i < num1.length; i++) {
        if (maxNumber < num1[i]) {
            maxNumber = num1[i];
        }

    }
    return maxNumber;
}
const myMax = max(numbers);
console.log('array max is =', myMax);

const fibo = [0, 1];
for (let i = 2; i <= 49; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}

console.log('series is :', fibo);

const chess = [1];
let sum = 0;
for (let i = 1; i <= 64; i++) {
    chess[i] = chess[i - 1] * 2;
    sum = sum + chess[i];
}
console.log('next is :', chess);
console.log('sum is :', sum);
