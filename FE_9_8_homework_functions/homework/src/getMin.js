// Your code goes here


function getMin(...args) {

    return args.reduce((leftNum, rightNum) => leftNum < rightNum ? leftNum : rightNum);
}
console.log(getMin());