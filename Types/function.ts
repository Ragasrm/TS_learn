function square(number: number):number{
    return number * number
}

square(90)


function Persion(name: string, age:number): string {

    return `The person name is ${name} and age is ${age}`

};


Persion("ragav", 2)


const colors = ["Red", "Blue", "yellow"]
colors.map(color=>{
console.log("color", color)
})


function gameLoop():never{
    while(true) { 
        console.log("Nevre")
    }
}

