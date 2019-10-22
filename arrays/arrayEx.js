const three = integers => integers.reduce((a, b) => a + b, 0);

// Do not modify this code. This is here to test your solution.
console.log("\nQuestion 3:");
console.log(`Input: [5, 10, 15]\t`, three([5, 10, 15]));
console.log(`Input: [-5, 10, 15]\t`, three([-5, 10, 15]));
console.log(`Input: [50, 0, 15]\t`, three([50, 0, 15]));
