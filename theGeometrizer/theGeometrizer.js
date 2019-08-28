function calcCircumfrence(diameter) {
  const pi = 3.14;

  return `The circumference is ${(diameter / 2) * pi} cm.`;
}

console.log(calcCircumfrence(5));

function calcArea(radius) {
  const pi = 3.14;

  return `The area is ${radius * radius * pi} cm².`;
}

console.log(calcArea(5));
