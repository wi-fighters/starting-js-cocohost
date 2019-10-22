const someObject = {
  D: 1,
  B: 2,
  C: 3
};

const objectToArray = obj => {
  const objArray = [];

  for (let prop in obj) {
    // console.log(prop);
    // console.log(obj[prop]);

    objArray.push([prop, obj[prop]]);
  }

  return objArray;
};

console.log(objectToArray(someObject));
