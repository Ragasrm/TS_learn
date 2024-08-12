// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
const age: number[] = []

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
const gameBoard: string[][]=[]
// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}
  type product = {name: string, price: number}
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices

function getTotal(product:product[]):number{
    console.log("product", product)
    let total:number = 0;
    product.forEach((oneProcut:product)=>{
        total += oneProcut.price 
    })

    return total

}

console.log(getTotal([
    {
        name:'A', price:123
    },
    {
        name:'B', price:12
    },
    {
        name:'C', price:12
    }
]));
