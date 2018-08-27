// Your code goes here
function findType(parameter) {
    return typeof parameter;
}

function forEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        let index = arr[i];
        func(index);

    }
}

function map(arr, func) {
    let transformArray = [];
    forEach(arr, index => transformArray.push(func(index)));
    return transformArray;
}

function filter(arr, func) {
    let filterArray = [];
    forEach(arr, index => {
        if (func(index)) {
            filterArray.push(index);
        }
    });
    return filterArray;
}

function getAdultAppleLovers(data) {
    let oldestArray = [];
    map(filter(data, index => {
        if (index.age >= 18 && index.favoriteFruit === 'apple') {
            oldestArray.push(index.name);
        }
    }));
    return oldestArray;
}

function keys(arr) {
    let object = [];
    for (let keys in arr) {
        if (arr.hasOwnProperty(keys)) {
            object.push(keys);
        }
    }
    return object;

}

function values(arr) {
    let object = [];
    for (let values in arr) {
        if (arr.hasOwnProperty(values)) {
            object.push(arr[values]);
        }
    }
    return object;
}

function showFormattedDate(formatDate) {
    let shortMounth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return `It is ${formatDate.getDate()} of ${shortMounth[formatDate.getMonth()]}, ${formatDate.getFullYear()} `;

}