// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
var age = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBoard = [];
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
function getTotal(product) {
    console.log("product", product);
    var total = 0;
    product.forEach(function (oneProcut) {
        total += oneProcut.price;
    });
    return total;
}
console.log(getTotal([
    {
        name: 'A', price: 123
    },
    {
        name: 'B', price: 12
    },
    {
        name: 'C', price: 12
    }
]));
