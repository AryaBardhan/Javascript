let score = "33"
//let score = "33abs" //output: NaN means "Not a number" 

//let score = null //output: 0
//let score = undefined //output: NaN
//let score = true //output: 1



console.log(typeof score);// checking the datatype using typeof
console.log(typeof (score));

let valueInNumber = Number(score); // to convert the string value into integer we use Number 
console.log(typeof valueInNumber);
console.log(valueInNumber);


//"33" => 33
//"33abc"=> NaN
//true = 1; false =>0;

let isLoggedIn = 1 
let booleanIsLoggedIn = Boolean(isLoggedIn) //converting 1 to boolean give output true
console.log(booleanIsLoggedIn);

//1 => true
//0 => false
//"" => false
//"arya" => true

let someNumber = 33

let stringNumber = String(someNumber) //covert to strings.....
console.log(stringNumber);
console.log(typeof stringNumber);

// *****************Operations************

let value = 3

let negValue = -value //to get negative value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);//power
console.log(2/3);
console.log(2%2);//remainder or mod


let str1 = "Hello"
let str2 = " Arya"

let str3 = str1 + str2
console.log(str3);

console.log("1"+ 2);
// if there is string at first then every thing after that will be converted into string
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");// if string is in last then the conversion wion will occur then the string

console.log(+true);// not recommended
console.log(+"");//not preffered

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);

let gameCounters = 100
++gameCounters;
console.log(gameCounters);

//link to documentation

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
