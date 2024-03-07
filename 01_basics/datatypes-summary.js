//Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null

//let userEmail; or let userEmail = undefined;

const id = Symbol('123') 
const anotherId = Symbol('123') // if we pass same value but the result of the id and anotherId will be differernt because of symbol


const bigNumber = 235254567848568587n //because of n it already converted into bigint


//Reference (Non-Primitive)

//Array, Objects, Functions


const heros = ["Shaktiman", "naagraj", "doga"]

let myObj = {
    name:"arya", 
    age: 22
}

const myFunction = function () {
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof outSideTemp);
console.log(typeof myFunction);
console.log(typeof heros);