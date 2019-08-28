// Exploring math object
//  Perform Mathematical Tasks with JavaScript. Remember: Print all results to the console!
// Math.floor(), Math.ceil(), Math.random(), Math.min(), Math.max(), Math.sqrt()

// 1. Lowest Number
// Create a program that takes prints the number with the lowest value.

// const myArray = Math.floor(Math.random() * 40);

console.log(Math.min(4, 5, 7, 8));

// 2. Highest Number
// Create a program that takes prints the highest number in that array.

console.log(Math.max(4, 5, 7, 8));

// 3. Rounding

// Round up
// Round up the following numbers: 3321.32321, 326.76, 76788.7, -9.78, 43.342.

const a = Math.ceil(3321.32321);
b = Math.ceil(326.76);
c = Math.ceil(76788.7);
d = Math.ceil(-9.78);
e = Math.ceil(43.342);

console.log(a, b, c, d, e);

// Round down
// Round down the following numbers:
// 3321.32321, 326.76, 76788.7, -9.78, 28.329.

const af = Math.floor(3321.32321);
bf = Math.floor(326.76);
cf = Math.floor(76788.7);
df = Math.floor(-9.78);
ef = Math.ceil(28.329);

console.log(af, bf, cf, df, ef);

// 4. Dice Roll!
// Create a program that prints a random **integer** from 1-6.

// const myArray = Math.floor(Math.random() * 40);

const min = 1;
max = 6;

console.log(Math.floor(Math.random() * (max - min + 1) + min));

// Dynamic solution

console.log(object);
