// Your code goes here
let a = 1;

function isPrime(value) {
    for (let i = 2; i < value; i++) {
        if (value % i === 0) {
            return false;
        }
    }
    return value > a;
}
console.log(isPrime());