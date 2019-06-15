// Your code goes here
const name = prompt('Enter your login:');
let b = '';

if (name === b || name === null) {
    alert('Canceled');
} else if (name.length < 4) {
    alert('I don’t know any users having name length less than 4 symbols');
} else if (name === 'User') {
    const password = prompt('Enter your password');
    if (password === b || password === null) {
        alert('Canceled');
    } else if (password === 'SuperUser') {
        alert(new Date().getHours() < 20 ? 'Good day' : 'Good evening');
    } else if (password !== 'SuperUser') {
        alert('Wrong password');
    }
} else {
    alert('I don’t know you');
}