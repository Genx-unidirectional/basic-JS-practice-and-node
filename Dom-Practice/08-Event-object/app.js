let input = document.querySelector(".input");
let para = document.querySelector(".para");
input.addEventListener("keydown", (e) => {
  para.innerText = e.target.value;
  //   console.log(e.key);
  console.log(e.target.value);
});
