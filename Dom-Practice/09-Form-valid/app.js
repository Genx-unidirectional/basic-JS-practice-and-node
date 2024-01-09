let btn = document.querySelector(".btn");
let formInput = document.querySelector(".form-input");
let formPass = document.querySelector(".form-input");
btn.addEventListener("click", (e) => {
  if (formInput.value === "" || formPass.value === "") {
    e.preventDefault();
    console.log("Please enter valid password");
  }
});
