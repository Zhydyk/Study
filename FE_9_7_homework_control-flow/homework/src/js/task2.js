// Your code goes here
let randomMaxNumber = 5,
    exampleNumber = 0,
    totalPrice = 0,
    winTen = 10;

confirm('Do you want to play a game') ? startGame() : alert('You did not become a millionaire, but can.');

function startGame() {
    let n = Math.floor(Math.random() * randomMaxNumber);
    for (let i = 3, possiblePrice = winTen; i > 0; i--, possiblePrice = Math.floor(possiblePrice / 2)) {
        const userWin = prompt(`Enter random number in range [0; ${randomMaxNumber}]
                 \nAttempts left: ${i}
                 \nTotal prize: ${totalPrice}$
                 \nPossible prize on current attempt: ${possiblePrice}$ `, exampleNumber);
        console.log(n);
        if (userWin === null) {
            break;
        }
        if (userWin === n) {
            totalPrice += possiblePrice;
            let repeat = confirm(`Congratulation you win ${possiblePrice}$! Do you want to continue?`);

            // start next level of game

            if (repeat === true) {
                winTen *= 3;
                randomMaxNumber *= 2;
                return startGame();
            } else if (repeat === false) {
                break;
            }
        }
    }
    alert(`Thank you for a game. Your prize is:  ${totalPrice}$`);
    confirm(`Do you want to continue?`) ? startGame() : false;
} // end startGame() function