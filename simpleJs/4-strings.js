let str1 = "Name ten books";

// console.log(str1[0]);

// let str2 = str1.substring(0);
// let str2 = str1.slice(0, -1);
// let str2 = str1.split(" ");
// let str2 = str1.split(" ", 2);
let str2 = str1.indexOf("ten");

// console.log(str2);

//Checking number of occurrence of character in string

let str3 = "Please don't embracing yourself";

function countOccurrences(str, char) {
  let count = 0;
  let position = str.indexOf(char);
  while (position !== -1) {
    count++;
    position = str.indexOf(char, position + 1);
  }
  return count;
}

// console.log(countOccurrences(str3, "e"));

// let result = str3.endsWith("P", 1);
// let result = str3.startsWith("P");
// let result = str3.lastIndexOf("e");

// console.log(result);

// let str4 = str1.concat(" " + str3);
// let str4 = str1.concat(" " + str3);
// let str4 = str1.toUpperCase();
// let str4 = str1.toLowerCase();

// console.log(str4);

let str5 = "Tim";

// let str6 = str5.repeat("tim", 10);
// let str6 = str5.padEnd(10, "doit");
// let str6 = str5.repeat(3);
// let str6 = str5.padStart(10, "yes");
let str6 = "    believe   ";
// console.log(str6.trimEnd());

// console.log(str6.includes("e"));

// using loops with string

// for (let char of str6) {
//   console.log(char);
// }
