// 1 - Create an object to hold information on your favorite recipe.
// It should have properties for title(a string), servings(a number), and ingredients(an array of strings).
// On separate lines(one console.log statement for each), log the recipe information so it looks like:
// -Mole
//   - Serves: 2
//     - Ingredients:
// -cinnamon
//   - cumin
//   - cocoa

// let recipe = {

// }

// Persona
var person3 = {
  firstName: "Ali",
  lastName: "Daq",
  middleName: "Baba",
  birthYear: 1989,
  birthDay: 19,
  birthMonth: 1,
  starSigns: [
    [119, "moonDog"],
    [218, "yellowMonkey"],
    [320, "wiseGoose"],
    [419, "pinkSnail"],
    [520, "greenPanther"],
    [620, "blueBat"],
    [722, "blackMirror"],
    [822, "whiteElephant"],
    [922, "spottedPig"],
    [1022, "redGorilla"],
    [1122, "lilaSwan"],
    [1221, "oceanMouse"]
  ],

  fullName: function() {
    return this.firstName + " " + this.middleName + " " + this.lastName;
  },
  age: function() {
    let today = new Date();
    return today.getFullYear() - this.birthYear;
  },
  myStar: function() {
    let createString = "" + this.birthMonth + this.birthDay; // we need a String to concatenate.
    let arrNum = Number.parseInt(createString, 10); // Then we need a number again
    // console.log(arrNum);

    for (let i = 0; i <= this.starSigns.length; ++i) {
      // Better to use .length because a Number is just Hard Coded ...
      if (arrNum <= this.starSigns[i][0]) {
        return this.starSigns[i][1];
      }
    }
  }
};

console.log(
  `${person3.fullName()} is ${person3.age()} years old. \n And this is his Star Sign: ${person3.myStar()}`
);

// Aries(March 21 - April 19)
// Taurus(April 20 - May 20)
// Gemini(May 21 - June 20)
// Cancer(June 21 - July 22)
// Leo(July 23 - August 22)
// Virgo(August 23 - September 22)
// Libra(September 23 - October 22)
// Scorpio(October 23 - November 21)
// Sagittarius(November 22 - December 21)
// Capricorn(December 22 - January 19)
// Aquarius(January 20 to February 18)
// Pisces(February 19 to March 20)
