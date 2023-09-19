const myAddFunction = function add(a: number, b: number) {
  return a + b;
};

console.log(myAddFunction(1, 2));

const myMultiplyFunction = (a: number, b: number) => a * b;

console.log(myMultiplyFunction(2, 3));

const mySubstractFunction = (a: number, b: number) => {
  console.log("hello");
  return a - b;
};

console.log(mySubstractFunction(5, 2));
