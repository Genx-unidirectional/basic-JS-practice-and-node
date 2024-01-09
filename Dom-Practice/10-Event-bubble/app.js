let btn = document.querySelector(".btn");

let vidBlock = document.querySelector(".block");
let video = document.querySelector("video");
btn.addEventListener("click", () => {
  vidBlock.classList.remove("hidden");
});

video.addEventListener("click", (e) => {
  e.stopPropagation();
  video.play();
});

vidBlock.addEventListener("click", (e) => {
  vidBlock.classList.add("hidden");
});
//Event bubbling happened and innermost event triggered first and outmost

// let ptest = document.querySelector(".ptest");
// let dtest = document.querySelector(".dtest");
// let test = document.querySelector(".test");

// const handleEvent = (e) => {
//   console.log(`${e.currentTarget.tagName}`);
// };

// test.addEventListener("click", handleEvent);
// ptest.addEventListener("click", handleEvent);
// dtest.addEventListener("click", handleEvent);
