// Your code goes here
const price = +prompt('Enter amount of money');
const discount = +prompt('Enter discont %');
const saved = price * discount / 100;
const priceWithDiscount = price - saved;




if (price < 0 || discount > 100) {
    console.log('Invalid data');
} else {
    console.log(`Price without discount: ${price.toFixed(2)} 
Discount: ${discount.toFixed(2)}%
Price with discount: ${priceWithDiscount.toFixed(2)}
Saved: ${saved.toFixed(2)}`);
}