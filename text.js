let form = document.querySelector("form");
let inputEm = document.querySelector(".inputEm");
inputEm.addEventListener("input", () => {
  form.style.height = "80px";
  let regex = /\w+@gmail.(com|in)/gi;
  let result = regex.test(inputEm.value);
  if (result == true) {
    form.classList.add("valid");
    form.classList.remove("wrong");
  } else if (result == false) {
    form.classList.add("wrong");
    form.classList.remove("valid");
  }
});

form.addEventListener("submit", () => {
  form.classList.remove("wrong");
  form.classList.remove("valid");
  form.style.height = "35px";
});
