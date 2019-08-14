// 1. Characters & Properties
// Declare a variable and assign a string as a value. 
// Make sure that the string is at least six characters long. 
//Print the length to the console. Access and print the 2nd and 6th elements of the string. 

const myName = "Nicolas";
console.log(`Name length is ${myName.length}`);
const second = myName[1];
const sixth = myName[5];

console.log(`The 2nd element is ${second}, the 6th element is ${sixth}`);

// 2. JS 
// Declare a variable and assign the value `JavaScript` to the variable. 
// Print the length of the string to the console, then print the `J` & `S` characters to the console.

const language = "JavaScript";
console.log(`Name length is ${language.length}`);
console.log(language[0] , language[4] );

// 3. I can...
// Declare a variable with the value of "I can walk in the park all day!". 
// Print the word "park" to the console.

const sentence = "I can walk in the park all day!";
const iCan = (sentence.includes("park"))? "park" : "What else can you do?";
console.log(`${iCan}`);

// console.log(whereToGo);

// 4 aSc
// Declare a variable with the value `JavaScript`. 
// Use string methods to print the characters `aSc` 
// from your declared variable.

const iLoveJs = "JavaScript";
console.log(iLoveJs[1] , iLoveJs[4] ,  iLoveJs[5]);

// 5. Upper Case
// Declare a variable with the value of `Hello World`. 
// Covert the value to upper case and print the converted value to the console.

const greeting = "Hello World";
const up = `${greeting.toUpperCase()}`;
console.log(up);



