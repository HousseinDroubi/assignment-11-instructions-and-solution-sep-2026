// Functions expression
function lineBreak() {
  console.log("------------------------");
}

function sayHi() {
  console.log("Hi");
}

function sayHello(name) {
  console.log(`Hi ${name}`);
}

function greeting(name = "Unkown") {
  console.log(`Hi ${name}`);
}

function welcome(isRegistered) {
  if (!isRegistered) {
    console.log("access denied");
    return;
  }

  console.log("passed");
}

function multiplication(n1, n2) {
  return n1 * n2;
}

function printDetails(username, age, ...courses) {
  console.log(`Hi, my name is ${username}, I'm ${age} years old.`);
  console.log(`My courses are:`);
  for (const course of courses) {
    console.log(`\t-${course}`);
  }
}

// Arrow Functions
const arrowSayHi = () => console.log("Hi");

const arrowGreeting = (name) => console.log(`Hi ${name}`);

// const summation = (n1, n2) => {
//   return n1 + n2;
// };
// Or you can do the following:
const summation = (n1, n2) => n1 + n2;

const function_1 = () => {
  console.log("Hi from function 1");
  const function_2 = () => {
    console.log("Hi from function 2");
  };
  function_2();
};

const division = (x) => {
  return (y) => {
    if (y == 0) return null;
    return x / y;
  };
};

const arrowSummation = (n1, n2) => n1 + n2;
const arrowSubtraction = (n1, n2) => n1 - n2;
const arrowMultiplication = (n1, n2) => n1 * n2;
const arrowDivision = (n1, n2) => {
  if (n2 == 0) return null;
  return n1 / n2;
};

const calculator = (callback, n1, n2) => {
  return callback(n1, n2);
};

// Call functions

sayHi();

lineBreak();

sayHello("Kamal");
lineBreak();
greeting("Hassan");
greeting();
lineBreak();
welcome(false);
welcome(true);
lineBreak();

let n1 = 3;
let n2 = 6;
console.log(`The result of ${n1} x ${n2} is ${multiplication(n1, n2)}`);

lineBreak();

printDetails("Houssein", 29, "HTML", "CSS", "JS", "PHP");

lineBreak();

setTimeout(function () {
  console.log("Hi");
}, 3000);

lineBreak();
arrowSayHi();
lineBreak();
arrowGreeting("Houssein");
lineBreak();

n1 = 10;
n2 = 33;
console.log(`The result of ${n1} + ${n2} is ${summation(n1, n2)}`);
lineBreak();
function_1();
lineBreak();

n1 = 10;
n2 = 0;

console.log(`The result of ${n1} / ${n2} is ${division(n1)(n2)}`);
n2 = 5;
console.log(`The result of ${n1} / ${n2} is ${division(n1)(n2)}`);

lineBreak();

console.log(
  `The result of ${n1} + ${n2} is ${calculator(arrowSummation, n1, n2)}`,
);
console.log(
  `The result of ${n1} - ${n2} is ${calculator(arrowSubtraction, n1, n2)}`,
);
console.log(
  `The result of ${n1} / ${n2} is ${calculator(arrowDivision, n1, n2)}`,
);
console.log(
  `The result of ${n1} * ${n2} is ${calculator(arrowMultiplication, n1, n2)}`,
);

lineBreak();
