//difference between a text file and a js file is this keywords

const accountId = 11456 //anything we define here will be constant means we cant change the value

let accountEmail = "arya1234@gmail.com" //we use to normally declare a variable which is changeable

// in Var there is proble of scope means if a keyword is created at same name in two files it wil change the data from the other file.

var accountPassword = "12345"// we dont use var becausse of scope means the bracces

accountCity = "Kolkata" //sometimes it work without adding any keyword we can declare variable 

//accountId = 2 // we can't change the value of the const 

let accountState; // if we leave any variable without defining its value js accept it as undefined...

//to change the value of any variable we write like this.....

accountEmail = "arya4321@gmail.com"
accountPassword = "54321"
accountCity = "Kalyani"

//Printing the Values

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]); // used for printing multiple data's in a tabular form

/*
Prefer not to use of Var
because of issue in block scope and funtional scope
*/