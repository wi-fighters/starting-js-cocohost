// Exercise 3

function generateBandName(clothingColor, lastFoodEaten) {
  const capitalizeColor = function() {
    return (
      clothingColor[0].toUpperCase() + clothingColor.substr(1).toLowerCase()
    );
  };

  const capitalizeFood = function() {
    return (
      lastFoodEaten[0].toUpperCase() + lastFoodEaten.substr(1).toLowerCase()
    );
  };

  return `The ${capitalizeColor()} ${capitalizeFood()}`;
}

console.log(generateBandName("green", "lobster"));
console.log(generateBandName("blue", "coffee"));
