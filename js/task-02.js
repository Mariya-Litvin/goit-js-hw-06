// HTML містить порожній список ul#ingredients.
// JavaScript містить масив рядків.

// Напиши скрипт, який для кожного елемента масиву ingredients:

// 1. Створить окремий елемент < li >.Обов'язково використовуй
// метод document.createElement().
// 2. Додасть назву інгредієнта як його текстовий вміст.
// 3. Додасть елементу клас item.
// 4. Після чого, вставить усі < li > за одну операцію у список
// ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

for (const ingredient of ingredients) {
  const ingredientsElement = document.createElement("li");
  ingredientsElement.textContent = ingredient;
  ingredientsElement.classList.add("item");
  ingredientsList.appendChild(ingredientsElement);
}
