const btn = document.querySelector(".btn");
const input = document.querySelector("input");
const taskSection = document.querySelector(".form");
btn.addEventListener("click", (e) => {
  const task = input.value;
  if (task.length > 3) {
    taskSection.innerHTML += `<div class="box box--ternary-pink">
    ${task}
    <button>Delete</button>
    </div>`;
  }
  input.value = "";
  return;
});

taskSection.addEventListener("click", (e) => {
  console.log(e.target.nodeName);
  if (e.target.nodeName === "BUTTON") {
    e.target.parentElement.remove();
  }
});
