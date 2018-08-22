// Your code goes here
function getClosestToZero(...args) {
    return args.reduce((leftNum, rightNum) => Math.abs(leftNum) < Math.abs(rightNum) ? leftNum : rightNum);
}
console.log(getClosestToZero());