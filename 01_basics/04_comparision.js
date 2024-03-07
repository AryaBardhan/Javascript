//this all give answer as boolean

// console.log(2 > 1); // greater than 1
// console.log(2 < 1); // lesser than 1
// console.log(2 >= 1); // greater than equal to 1
// console.log(2 == 1); //  equal to 1
// console.log(2 != 1); // not equal to 1


console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); // comparision convert null to a number, treating it as 0, so it give output true and null > 0 is false

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// in js the comparision {>,<} and the equality check {==} are different

console.log("2" == 2); //conversion take place only number to string
console.log("2" === 2); //checks the datatype, conversion doesnt take place

