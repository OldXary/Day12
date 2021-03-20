
function generateFibonacci(numMax) {
    var i;
    var fib = [];

    fib[0] = 0;
    fib[1] = 1;
    for (i = 2; i <= numMax; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }

    fib.splice(0, 1);
    return fib;
}

function sumFibonacci(num) {
    var fibArray = generateFibonacci(200);
    var sum = 0;
    var i = 0;
    while (fibArray[i] <= num) {
        if (fibArray[i] % 2 !== 0) {
            sum += fibArray[i];
        }
        i++;
    }

    return sum;
}
console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;