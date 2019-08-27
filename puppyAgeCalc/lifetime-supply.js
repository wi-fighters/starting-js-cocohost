function calculateSupply(age, amountPerDay) {
  const maxAge = 90;
  const supply = (maxAge - age) * amountPerDay * 365;
  return `You will need ${supply} Snickers to last you until the ripe old age of ${maxAge}.`;
}

console.log(calculateSupply(52, 2));
console.log(calculateSupply(31, 1));
console.log(calculateSupply(89, 1));
