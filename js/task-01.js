const categoryEl = document.querySelectorAll("#categories li.item");
console.log(`В списке ${categoryEl.length} категории.`);

categoryEl.forEach((cat) => {
  console.log(`Категория: ${cat.querySelector("h2").textContent}`);
  console.log(`Количество элементов: ${cat.querySelectorAll("li").length}`);
});
