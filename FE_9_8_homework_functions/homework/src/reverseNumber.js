let num = 1000,
    b = '';

function number(num) {
    num = num.toString();

    if (num < 0) {
        num = +Math.abs(num) + b;
        num = -num.split(b).reverse().join(b);
        num = Number(num);
        return num;
    } else if (num > 0) {
        num = num.split(b).reverse().join(b);
        num = Number(num);
        return num;
    }
}
console.log(number(num));