// NESTED LOOPS

console.log(`\n=========================\n`);
const nestedPipes = () => {
  let pipes = "";

  for (let i = 0; i < 4; i += 1) {
    pipes = "";

    for (let j = 0; j < 5; j += 1) {
      pipes += "| ";
    }
    console.log(pipes);
  }
};

nestedPipes();
console.log(`\n=========================\n`);

const dashAndPipes = () => {
  let pipeDashes = "";

  for (let i = 0; i < 3; i += 1) {
    pipeDashes = "";

    for (let j = 0; j < 5; j += 1) {
      if (j % 2 === 0 && i % 2 === 0) {
        // j = even / i even
        pipeDashes += "- ";
      } else if (j % 2 !== 0 && i % 2 === 0) {
        // j = odd / i even
        pipeDashes += "| ";
      } else if (j % 2 === 0 && i % 2 !== 0) {
        // j = odd / i even
        pipeDashes += "| ";
      } else if (j % 2 !== 0 && j % 2 !== 0) {
        pipeDashes += "- ";
      }
    }
    console.log(pipeDashes);
  }
};

dashAndPipes();

console.log(`\n=========================\n`);

// TannenBaum function

//    *
//   ***
//  *****
// *******

const tannenBaum = () => {
  let zweige = " ";
  let stamm = " ";

  for (let rows = 0; rows < 4; rows += 1) {
    zweige = " ";
    for (let leer = 3; leer > rows; --leer) {
      zweige += "   ";
    }
    for (let sterne = 0; sterne <= rows; ++sterne) {
      zweige += " * ";
    }
    for (let leer = 0; leer < rows; ++leer) {
      zweige += " * ";
    }
    console.log(zweige);
  }
  for (let rows = 0; rows < 2; rows += 1) {
    stamm += "   ";
  }
  for (let rows = 0; rows < 3; rows += 1) {
    stamm += " * ";
  }
  console.log(stamm);
};

tannenBaum();

console.log(`\n=========================\n`);
