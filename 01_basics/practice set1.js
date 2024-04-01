// Q1. Create a Variable of type string and try to add a number to it.

//  let alpha = "Arya"
//  let Beta = 12
//  let Gamma = alpha + Beta

//  console.log(Gamma);

//Q2. Use  typeof operator to find the datatype of the string in last question

// console.log(typeof alpha);
// console.log(typeof Beta);
// console.log(typeof Gamma);

//Creta a const object in javascript. Can you changge it to hold a number later.

// const a1 = {
//     name: "Arya",
//     number: 1,
//     isPrinciple: false,
// }
// object = 54

//Q3. Try to add a new key to the constant object in problem 3 were you able to do it

// a1['friend'] = "shubham" // to add new key in an object

// console.log(a1);

//write a js problem to create a word -meaning dictionary of 5 words.

const dict = {
    aprreciate: "recognize the full worth of ",
    beautiful: "pleasing the senses or mind aesthetically.",
    colleague: "a person with whom one works in a profession or business.",
    diversity: "the state of being diverse; variety.",
    empathy:"the ability to understand and share the feelings of another."
}

console.log(dict.empathy); //syntax of printing #1
console.log(dict['empathy']);//syntax of printing #2