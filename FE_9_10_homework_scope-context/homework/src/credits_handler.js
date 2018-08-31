/* Your code goes here */

function userCard(key) {
    let balance = 100,
        transactionLimit = 100,
        historyLogs = [],
        timeOfOperations = new Date().toLocaleString('en-GB');
    const commission = 0.005;

    return {
        getCardOptions() {
            return { key, balance, transactionLimit, historyLogs };
        },

        putCredits(amountOfCredits) {
            balance += amountOfCredits;
            historyLogs.push({
                operationType: 'Reseived credits',
                credits: amountOfCredits,
                operationTime: timeOfOperations
            });
        },
        takeCredits(amountOfCredits) {
            if (amountOfCredits <= balance && amountOfCredits <= transactionLimit) {
                balance -= amountOfCredits;
                historyLogs.push({
                    operationType: 'Withdrawal of credits',
                    credits: amountOfCredits,
                    operationTime: timeOfOperations
                });
            } else {
                console.log(`Sorry, you can not take credits from the card, 
                    because transaction limit and remaining balance are lower`);
            }
        },
        setTransactionLimit(amountOfCredits) {
            transactionLimit = amountOfCredits;
            historyLogs.push({
                operationType: 'Transaction limit change',
                credits: amountOfCredits,
                operationTime: timeOfOperations
            });
        },
        transferCredits(amountOfCredits, destinationCard) {
            const amountWithCommission = amountOfCredits * commission + amountOfCredits;
            if (transactionLimit < amountWithCommission) {
                console.log(`You can not transfer credits,`);
            } else if (balance < amountWithCommission) {
                console.log(`You can not transfer credits,`);
            } else {
                this.takeCredits(amountWithCommission);
                destinationCard.putCredits(amountOfCredits);
            }
        }
    }
}
class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.maxCards = 3;
    }

    addCard() {
        if (this.cards.length < this.maxCards) {
            this.cards.push(userCard(this.cards.length + 1));
        } else {
            console.log(`Sorry, you can not have more than three cards`)
        }
    }

    getCardByKey(key) {
        return this.cards[key - 1];
    }
}