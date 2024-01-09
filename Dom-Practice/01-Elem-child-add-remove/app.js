let parent = document.querySelector(".box");
let addBtn = document.querySelector(".adder");
let removeBtn = document.querySelector(".reducer");

addBtn.addEventListener("click", () => {
  if (parent.childNodes.length > 1) return;
  let child = document.createElement("div");
  child.classList.add("box--secondary-red");
  child.classList.add("child");
  parent.append(child);
  console.log(parent.children);
});

removeBtn.addEventListener("click", () => {
  let child = document.querySelector(".child");
  parent.removeChild(child);
});
