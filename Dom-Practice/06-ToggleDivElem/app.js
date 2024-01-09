let section = document.querySelector(".test");

let Block = document.createElement("div");

let btn = document.createElement("button");

btn.innerText = "Toggle Color";

btn.addEventListener("click", () => {
  Block.classList.toggle("pink");
});

section.append(Block, btn);
