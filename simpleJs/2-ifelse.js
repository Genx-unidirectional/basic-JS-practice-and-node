let a = 23;
let b = 4;

// Arithmatic operators

console.log(a - b);
console.log(a + b);
console.log(a / b);
console.log(a * b);
console.log(a ** b);
console.log(a % b);

//Comparision operators

console.log(a > b);
console.log(a == b);
console.log(a === b);
console.log(a < b);
console.log(a <= b);
console.log(a >= b);

//Logical operators

if (a & b) {
  console.log(a + b);
}

if (!(0 & b)) {
  console.log(a + b);
}

// we also have | operator

if (a & b) a + b;

a + b > 20 ? "bigger" : "smaller";

console.log("jake" && "tim");
console.log(null || "tim");

function score() {
  console.log("You won");
}

let key = 10;
switch (key) {
  case 10:
    console.log(10);
    break;
  case 20:
    console.log(20);
    break;
  case 30:
    console.log(30);
    break;
  case 50:
    console.log(50);
    break;
  default:
    console.log("We are at default");
}
