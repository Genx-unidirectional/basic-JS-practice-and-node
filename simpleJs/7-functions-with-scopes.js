let a = 10;
function test() {
  let a = 12;
  console.log(a);
}

// test();
// console.log(a);

let f = 34;

function greet() {
  let f = 45;
  console.log(f);
  function greet2() {
    console.log(f);
  }
  greet2();
}

// greet();

// Use function to create new array having values cube of original array

const cube = (x) => {
  return x ** 3;
};

const newArrMaker = (func, arr) => {
  let result = new Array(arr.length);
  for (let i = 0; i < result.length; i++) {
    result[i] = func(arr[i]);
  }
  return result;
};

let arr = [1, 2, 3, 4, 5];

let arr2 = newArrMaker(cube, arr);
// console.log(arr2);

// Create factorial function with recursion

const fact = (num) => {
  if (num === 1) return 1;
  return num * fact(num - 1);
};

// console.log(fact(4));

// Checking scope in nexted function

let num1 = 20;
let num2 = 30;
const name = "Ganesh";

function multiply() {
  return num1 * num2;
}

// console.log(multiply());

function person() {
  const num1 = 5;
  const num2 = 10;
  console.log(`The ${name} has ${num1} ${num2}`);
  return multiply();
}

// console.log(person());

function outside() {
  let x = 5;
  function inside(x) {
    return x * 2;
  }
  return inside;
}

// console.log(outside()(10));
// So basically outside() is returning the inside function then with 10 argument it get called

//Let's create the function which has inner function which can hold the variable inside it
//Below is a function which act as a closure which holds variable even after function is executed

const createPet = (name) => {
  function getPet() {
    return name;
  }
  return getPet;
};

let pet = createPet("tom");

// console.log(pet());

// Creating a function who returns a object to manipulate the variable inside that function

const createPet2 = function (name) {
  let sex;
  let pet = {
    setName(newName) {
      name = newName;
    },
    getName() {
      return name;
    },
    setSex(newSex) {
      if (
        typeof newSex === "string" &&
        (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
      ) {
        sex = newSex;
      }
    },
  };
  return pet;
};

let homePet = createPet2("Jade");
0;
// console.log(homePet.getName());
homePet.setName("riot");
// console.log(homePet.getName());

//By default functions have argument which store extra parameter passed into argument object

function statement(separator) {
  let result = "";
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}

// console.log(statement(",", "ganesh", "tim", "soudhi"));

//Creating object using function

// function person() {
//   this.age = 0;
//   setInterval(function growUp() {
//     // In nonstrict mode, the growUp() function defines `this`
//     // as the global object, which is different from the `this`
//     // defined by the Person() constructor.
//     this.age++;
//     // console.log(this.age);
//   }, 1000);
//   console.log(this.age);
// }

// let p1 = new person();

function person() {
  const self = this;
  self.age = 0;
  setInterval(function growUp() {
    self.age++;
    console.log(self.age);
  }, 1000);
}

// let p1 = new person();
