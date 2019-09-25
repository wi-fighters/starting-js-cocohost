const target = {
  name: "Nicolas",
  age: 53,
  city: "Berlin"
};

const source = {
  name: "Nicolas",
  age: 22,
  city: "Munic",
  job: "Web-Dev"
};

const assignedTarget = Object.assign(target, source);
console.log(assignedTarget);
console.log(typeof assignedTarget);
