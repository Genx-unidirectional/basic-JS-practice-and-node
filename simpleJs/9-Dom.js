console.dir(window.document);
let img = document.getElementsByClassName("pic");
// console.log(Array.from(img, (el) => el.src));

let section = document.querySelector(".test");
console.log(section.childNodes);
console.log(section.children[1].previousElementSibling);
console.log(section.children[1].previousElementSibling.parentElement);
console.log(section.children[1].previousElementSibling.parentNode);

let data = [
  {
    id: 1,
    name: "ganesh",
    age: 21,
  },
  {
    id: 2,
    name: "Tim",
    age: 22,
  },
  {
    id: 3,
    name: "Jade",
    age: 24,
  },
  {
    id: 4,
    name: "Yash",
    age: 24,
  },
  {
    id: 5,
    name: "dave",
    age: 38,
  },
];

// let ul = document.getElementsByClassName("ulist");
let ul = document.querySelector(".ulist");

console.log(ul);
for (let el of data) {
  let li = document.createElement("li");
  li.innerHTML = `<div id="${el.id}">
                      <h3>${el.name}</h3><br>
                    <p>Age is ${el.age}</p>
                    </div> `;
  //   console.log(li);
  li.style.color = "green";
  ul.append(li);
}
// section.remove();
/*
children,
childnodes,
nextsibling,
nextElementSibling,
prevElementSibling,
parentNode,
parentElement,
append,
prepend,
classlist,
classlist.toggle,
classlist.add,
setAttribute,
getAttribute,
replaceAttribute,
remove


*/
