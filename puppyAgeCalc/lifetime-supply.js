function calculateSupply(age, amountPerDay) {
  const maxAge = 90;
  const supply = Math.floor((maxAge - age) * amountPerDay * 365);
  return `You will need ${supply} Snickers to last you until the ripe old age of ${maxAge}.`;
}

console.log(calculateSupply(52, 8.2));
console.log(calculateSupply(31, 2.8));
console.log(calculateSupply(89, 1.3));
