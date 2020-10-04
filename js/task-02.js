const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsEl = document.querySelector("#ingredients");

// for (let i = 0; i < ingredients.length; i += 1) {
//   let li = document.createElement("li");
//   li.innerHTML = ingredients[i];
//   ingredientsEl.append(li);
// }

// ingredients.forEach((ingredient) => {
//   let li = document.createElement("li");
//   li.textContent = ingredient;
//   ingredientsEl.append(li);
// });

ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  ingredientsEl.appendChild(li);
});

// ingredientsEl.append(
//   ...ingredients.map((ingredient) => {
//     const li = document.createElement("li");
//     li.textContent = ingredient;
//     return li;
//   })
// );
