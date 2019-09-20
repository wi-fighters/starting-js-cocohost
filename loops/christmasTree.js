// TannenBaum function

//    *
//   ***
//  *****
// *******

const tannenBaum = () => {
  let zweige = " ";

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
};

tannenBaum();

console.log(`\n=========================\n`);
