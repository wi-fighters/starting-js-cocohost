// 1. ** sumOfNumbers **

const sumOfNumbers = numbers => {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
};

// Do not modify this code. This is here to test your solution.
console.log(`\n Exercise sumOfNumbers:`);

console.log(`Input: [5, 10, 15]\t`, sumOfNumbers([10, 20, 30]));
console.log(`Input: [-5, 10, 15]\t`, sumOfNumbers([23, 1, 3]));
console.log(`Input: [50, 0, 15]\t`, sumOfNumbers([99, 77, 55]));
