// Define Object
const obj = {
  counter: 0
};

// Define setters

// reset
Object.defineProperty(obj, "reset", {
  get: function() {
    this.counter = 0;
  }
});

// divide

Object.defineProperty(obj, "divide", {
  set: function(value) {
    this.counter /= value;
    this.counter = Math.floor(this.counter); // Um ganze Zahlen zu erhalten.
  }
});

// increment

Object.defineProperty(obj, "increment", {
  get: function() {
    this.counter += 1;
  }
});
// decrement

Object.defineProperty(obj, "decrement", {
  set: function(value) {
    this.counter -= 1;
  }
});
// subtract

Object.defineProperty(obj, "subtract", {
  set: function(value) {
    this.counter -= value;
  }
});
// add

Object.defineProperty(obj, "add", {
  set: function(value) {
    this.counter += value;
  }
});

obj.add = 5;
console.log(obj.counter);
obj.subtract = 7;
console.log(obj.counter);
obj.add = 33.511;
obj.divide = 2;
console.log(obj.counter);
obj.reset;
console.log(obj.counter);
