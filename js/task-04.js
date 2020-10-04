const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const resultValue = document.querySelector("#value");
let counterValue = 0;

function onDecrementBtnClick() {
  counterValue -= 1;
  resultValue.textContent = `${counterValue}`;
  //   console.log(counterValue);
}

function onIncrementBtnClick() {
  counterValue += 1;
  resultValue.textContent = `${counterValue}`;
  //   console.log(counterValue);
}

decrementBtn.addEventListener("click", onDecrementBtnClick);

incrementBtn.addEventListener("click", onIncrementBtnClick);
