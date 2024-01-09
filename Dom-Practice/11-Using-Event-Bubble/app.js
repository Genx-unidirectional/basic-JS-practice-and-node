let test = document.querySelector(".test");
let box = document.querySelector(".box");

const random = (num) => {
  return Math.floor(Math.random() * (num + 1));
};
test.addEventListener("click", (e) => {
  e.target.style.backgroundColor = `rgb(${random(255)},${random(255)},${random(
    255
  )})`;
});
