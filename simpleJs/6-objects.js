"use strict";
let obj = {
  name: "ganesh",
  age: 21,
  team: "LighteningSpeed",
};

let obj2 = Object.assign(obj);
console.log(obj2);
obj2.money = "broke";
console.log(obj2);
console.log(obj);

let obj3 = Object.create(obj);
console.log(obj3);

// console.log(obj3.name);

// let arr1 = Object.entries(obj);
// console.log(arr1);

for (let [key, value] of Object.entries(obj)) {
  console.log(key, value);
}

let arr2 = [
  ["name", "ganesh"],
  ["age", 22],
  ["team", "furious"],
  ["money", "RS 10000000"],
];

console.log(Object.fromEntries(arr2));

let obj4 = {
  company: "Atlassian",
  post: "AI engineer",
  workTime: "10 hour",
};

// Object.freeze(obj4);
// Object.seal(obj4);
// Object.preventExtensions(obj4);
obj4.location = "chicago";
console.log(obj4);

let obj5 = {
  value: 12,
  age: 21,
};

console.log(obj5.valueOf());
