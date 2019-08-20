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
const iCan = sentence.includes("park") ? "park" : "What else can you do?";
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
// const up = `${greeting.toUpperCase()}`;
const up = greeting.toUpperCase();
console.log(up);

// 6. Lower Case
// Declare another variable with the value of `Hello Earthling`. 
// Convert the value to lower case and print the converted value to the console.

const hi = "Hello Earthling";
// const up = `${greeting.toUpperCase()}`;
const hello = hi.toLowerCase();
console.log(hello);

// 7. Does it contain...?
// Check if the words `nice shoes` contains the letter `l` or `n`.


// 8. Front & Back
// Create a new string from a given string with the first character of the given string added at the front and back.
// Expected output: JavaScript => JJavaScriptJ

//9. Last Three Chars
//Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more.
// Expected output: Javascript => iptJavaScriptipt


// 10. Java
// Create a variable and assign a string value to it. 
// Then, convert the value to upper case and print the value to the console. 
// Check whether it includes `Java`.


// 11. First and Last
// Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2. 
// Expected output: JavaScript => tavaScripJ

// length -1 to get the last char


// 12. Concatenation
// Create 3 different variables about yourself using strings as values e.g. let firstName = "Maria". Print the sentence to the console using string interpolation. 
// Example of output: `My name is Maria. I live in Berlin and I am a teacher`.


// 13. Capitalize
// Declare a variable and assign the value `the quick brown fox` (lower case). 
// Capitalize the first letter of that string.

const panGram = "the quick brown fox";
console.log(panGram[0].toLocaleUpperCase() + panGram.substring(1));



