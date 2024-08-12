function printName(person: {first:string, last:string}):string {
    return `${person.first} ${person.last}`

}

printName({ first:'Ragag', last:"Endiran"})

function randomCoordinate():{x:number, y:number} {
    return { x: Math.random(), y:Math.random()}
}


//printName({first:"A", last:"B", age:22})
const BB = {first:"A", last:"B", age:22};
printName(BB)

type Song={title:string, artist:string, numberStream:number, credit:{ producer:string, writer:string}}

function calculatePayout(song:Song):number {
    return song.numberStream * 0.0033
}


interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}


function NewBread(animal:Dog) {
    console.log("Animale", animal)
}


let newAnimal:Dog = {name:"DDDD", breed:"asdasd"};
NewBread(newAnimal);


