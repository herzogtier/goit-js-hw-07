const validationInput = document.querySelector("#validation-input");

const validationInputLenth = function () {
  if (
    validationInput.value.length < Number(validationInput.dataset.length) ||
    validationInput.value.length > Number(validationInput.dataset.length)
  ) {
    validationInput.classList.add("invalid");

    // console.log("введено неверное количество символов - надо 6");
  } else {
    // validationInput.classList.("invalid");
    validationInput.classList.add("valid");
    // console.log("введено верное количество символов");
  }
};

validationInput.addEventListener("focus", () => {
  validationInput.classList = "";
});
validationInput.addEventListener("blur", validationInputLenth);
