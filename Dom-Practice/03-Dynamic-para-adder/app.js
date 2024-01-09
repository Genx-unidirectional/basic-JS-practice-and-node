function change() {
  let input = document.querySelector(".textAdd");
  let pContainer = document.querySelector(".content");
  let p = document.createElement("p");
  p.innerText = input.value;
  pContainer.appendChild(p);
}
