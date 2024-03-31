// // class Car {
// //     model = "nata";
// //     brand = "v";
// //     drive () {
// //         return this.model + " is car"
// //     }
// // }
// // const x = new Car()
// // console.log(x.drive());


// class Car {
//     model = "v";
//     brank = "neta";
//     type = "ev";
//     color = "white";
//     #enginePower = 1.5;

//     run ( ) {
//         return "model " + this.model + " has " + this.#enginePower + " kilowatt"
//     }
// }

// const x = new Car();

// console.log(x.run());

// function Person(name){
//     this.name = name;
// }
// const person1 = new Person('bob');
// console.log(person1.name);

// const person = {
//     name : "Alice", 
//     greet(){
//         console.log(`Hello, my name is ${this.name}`)
//     }
// };
// person.greet()
const date = new Date();
console.dir(date);

console.log(date.getHours())
console.log(date.getTime())
console.log(date.getMonth());
console.log(date.getFullYear());


class House {
    constructor(color){
        this.color = color
    }
    furniture (){
        return "sofa"
    }
}

const houseObject = new House("red");
const houseObject2 = new House("blue");
console.log(houseObject.furniture())