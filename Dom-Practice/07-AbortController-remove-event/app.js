let btn = document.querySelector(".btn");
let box = document.querySelector(".box");
let btn2 = document.querySelector(".rm");
let controller = new AbortController();
function random(number) {
  return Math.floor(Math.random() * (number + 1));
}
btn.addEventListener(
  "click",
  () => {
    //   console.log("hello");
    //   let random = Math.floor(Math.random() * 100);
    box.style.backgroundColor = `rgb(${random(255)},${random(255)},${random(
      255
    )})`;
  },
  {
    signal: controller.signal,
  }
);

btn2.addEventListener("click", () => {
  controller.abort();
});
