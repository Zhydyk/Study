// Your code goes here
const a = +prompt('Enter length_a');
const b = +prompt('Enter length_b');
const angle = +prompt('Enter two sides and the α-angle in between ');
const ang = 180;
const c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2) - 2 * a * b * Math.cos(angle * Math.PI / ang));
const perimeter = a + b + c;
const square = 1 / 2 * a * b * Math.sin(angle * Math.PI / ang);




if (a < 0 || b < 0 || angle < 0 || angle >= ang) {

    console.log('Invalid data');

} else {
    console.log(`c length: ${c.toFixed(2)}
Triangle square: ${square.toFixed(2)}
Triangle perimeter: ${perimeter.toFixed(2)}`);
}