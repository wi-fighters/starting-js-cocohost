// change this code to make it working: blush:
// const person;

// 1 - change what needed to ADD other more people to your array of objects, you need at lest 5 people
// 2 - Find how many people has a job
// 3 - display only the people are over 30 and has no job

let person = [];

const person = function(firstName, lastName, age, employed) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = employed;
  this.name = function() {
    return this.firstName + " " + this.lastName;
  };
};

let person1 = new Person("John", "Doe", 50, true);
let person2 = new Person("Sally", "Rally", 48, true);
let person3 = new Person("Bernd", "Böhm", 33, false);
let person4 = new Person("Theresa", "Fritz", 33, false);
let person5 = new Person("Martin", "Blitz", 33, false);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.employed);
