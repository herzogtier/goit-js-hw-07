const nameInputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");
// const showInput = document.querySelector('button[data-action="show-input"]');

// showInput.addEventListener("click", () => {
//   console.log(nameInputEl.value);
// });

function emptyInput() {
  if (nameInputEl.value !== "") {
    nameOutputEl.textContent = `${nameInputEl.value}`;
  } else {
    nameOutputEl.textContent = "незнакомец";
  }
}

nameInputEl.addEventListener("input", emptyInput);

// if (nameInputEl.value != "") {
//   nameOutputEl.textContent = `${nameInputEl.value}`;
// }
