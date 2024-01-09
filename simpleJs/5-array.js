let arr1 = [1, 2, 3, 4];

// Array mutating methods with their corresponding non-mutating methods

// let arr2 = arr1.copyWithin(2);
// console.log(arr2);

// let arr3 = arr1.fill(2, 0, 1);
// console.log(arr3);

// arr1.shift();
// arr1.unshift(2);
let arr8 = arr1.toSpliced(0, 0, 2);
// console.log(arr8);

// arr1.push(1);
let arr4 = arr1.concat(2);
// arr1.pop();
let arr5 = arr1.toSpliced(-1, 1);
// console.log(arr5);

// arr1.splice(0, 2, 10, 20);
let arr6 = arr1.toSpliced(0, 2, 10, 20);
// console.log(arr6);

// arr1.reverse();
// arr1.sort((a, b) => a-b);
let arr7 = arr1.toSorted((a, b) => b - a);
// console.log(arr7);

// console.log(arr1.indexOf(2));

// console.log(arr1.includes(2));

// Using loops with arrays

for (const item of arr1) {
  //   console.log(item);
}

for (const i in arr1) {
  //   console.log(arr1[i]);
}

// Methods with iteration

arr1.forEach((item, index, arr) => {
  //   console.log(item, index, arr);
});

let arr9 = arr1.map((item) => {
  return item + 2;
});

// console.log(arr9);

let arr10 = [20, 20, 22, 39, 48];

let arr11 = arr1.filter((item) => item > 2);

// console.log(arr10.every((el) => el > 20));
// console.log(arr10.some((el) => el > 20));

// console.log(arr10.slice(0));
// // console.log(arr10.join("up"));

// console.log(arr10.find((el) => el > 20));
// console.log(arr10.findIndex((el) => el > 20));
// console.log(arr10.findLast((el) => el > 20));
// console.log(arr10.findLastIndex((el) => el > 20));

let links = document.querySelectorAll(".test");

let arr12 = Array.from(links, (el) => el.href);

// console.log(arr12);
let notSafeLinks = arr12.filter((el) => el.includes("http//"));
// console.log(notSafeLinks);

let arr13 = [
  [1, 2],
  [2, 3],
  [4, 5, [6, 7]],
];

// console.log(arr13.flat(2));

let arr14 = arr1.flatMap((el) => [el, el * 2]);
// console.log(arr14);

// Let's create the matrix of 1 of 3 by 3

let arr15 = new Array(3);

for (let i = 0; i < arr15.length; i++) {
  arr15[i] = new Array(3).fill(1);
}

// console.log(arr15);

// Using every function to check number in array is greater than its preceding number

let arr16 = [1, 2, 3, 4, 5];

function checkAscending(arr) {
  return arr.every((el, idx, arr) => {
    if (idx > 0 && el > arr[idx - 1]) {
      return true;
    }
    return true;
  });
}
console.log(checkAscending(arr16));

// checking the number is smaller than its previous and number after this number

function befAftSmall(arr) {
  return arr.filter((el, idx, arr) => {
    if ((idx > 0) & (arr[idx - 1] > el)) {
      return true;
    }
    if ((idx < arr.length - 1) & (arr[idx + 1] > el)) {
      return true;
    }
  });
}

let arr17 = [3, 4, 2, 3, 1, 3, 4, 5, 1, 30, 1, 3, 5, 0, 12];

let result = befAftSmall(arr17);
console.log(result);

let arr18 = Array.from({ length: 4 }, (v, i) => i);
console.log(arr18);

// Create range function Which takes start and stop nad step to creat the
// respective array

const range = (start, stop, step) => {
  return Array.from(
    { length: (stop - start) / step + 1 },
    (v, i) => start + step * i
  );
};

console.log(range(0, 5, 1));

let arr19 = [1, 2, 3, 4, 5];

console.log(arr19.with(2, 10));
