// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let i = 0;
// while (true) {
//   i++;
//   if (i > 10) {
//     console.log("Its greater than 10");
//     break;
//   }
// }

// do {
//   i++;
//   console.log(i);
// } while (i > 20);

let j = 0;
while (j < 20) {
  if (j < 10) {
    j++;
    continue;
  }
  j++;
  console.log(j);
}
