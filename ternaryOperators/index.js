// 1. canDrive?
// Declare a variable named canDrive. Check if someone's age is over 18. If so, 
// print `Yes, you can drive! Hope you have a license` 
// and if not, print `Nope, you're too young!`

const canDrive = 18;
const personAge = 17;

const ageCheck = (personAge >= canDrive) ? "Yes, you can drive! Hope you have a license" : "Nope, you're too young!";
console.log(ageCheck);

// 2. Slow Down!
// Declare a variable named speedCheck. If speed is above 130km, 
// print `You're going too fast - slow down!`. 
// If speed is lower than 130km, print `You're driving below the speed limit`.

const speedZone = 130;
const speedTest = 200;

const speedCheck = (speedTest >= speedZone) ? "You're going too fast - slow down!" : "You're driving below the speed limit";
console.log(speedCheck);

// 3. How old are you?
// Declare a variable named personControl. If age is below 21, print ``. Otherwise print `Here's some wine`.

const alcRelease = 21;
const personControl = 44;

const drinkRecommendation = (alcRelease >= personControl) ? "Here's some juice" : "Here's some wine";
console.log(drinkRecommendation);

// 4. Student Discount
//Declare a variable named isStudent. If true, print `Ticket costs €5,00`. If false, print `Ticket costs €12,00`.

const isMember = true;
const isStudent = (isMember) ? "Ticket costs €5,00" : "Ticket costs €12,00";

console.log(isStudent);

// Another Version ..

const isAnotherStudent = "No";
const latestCheck = ("yes" == isAnotherStudent) ? "Ticket costs €5,00" : "Ticket costs €12,00";

console.log(latestCheck);


// 5. What time is it?
// Declare a variable named timeOfDay. 
// Check if the time of day is `morning` - if so, print `Good Morning`. If not, print `Good Evening`.

const morning = true
const timeOfDay =(morning) ? "Good Morning" : "Good Evening";

console.log(timeOfDay);


