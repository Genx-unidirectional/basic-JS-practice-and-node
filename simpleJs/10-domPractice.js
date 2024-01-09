let content = document.querySelector(".content");
console.log(content);
let tArea = document.createElement("textarea");
tArea.setAttribute("placeholder", "Focus here");
console.log(tArea);

let btn1 = document.createElement("button");
btn1.textContent = "Show Text";
btn1.style.padding = "1rem";
let btn2 = document.createElement("button");
btn2.textContent = "Hide Text";
btn2.style.padding = "1rem";

btn1.addEventListener("click", () => {
  tArea.textContent = "Hey there you are doing great";
});
btn2.addEventListener("click", () => {
  tArea.textContent = "";
});

content.append(tArea, btn1, btn2);
