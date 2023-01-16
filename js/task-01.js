// HTML містить список категорій ul#categories.
// Напиши скрипт, який:

// 1.Порахує і виведе в консоль кількість категорій в
// ul#categories, тобто елементів li.item.
// 2. Для кожного элемента li.item у списку ul#categories,
//   знайде і виведе в консоль текст заголовку елемента(тегу < h2 >)
//   і кількість елементів в категорії(усіх < li >, вкладених в нього).

const numberList = document.querySelectorAll(".item");
console.log("Number of categories:", numberList.length);

// for (const item of numberList) {
//   const nameItem = item.firstElementChild.textContent;
//   console.log(`Category: ${nameItem}`);

//   const categoriesList = item.querySelectorAll("li");
//   console.log("Elements:", categoriesList.length);
// }

numberList.forEach((item) => {
  const nameItem = item.firstElementChild.textContent;
  console.log(`Category: ${nameItem}`);
  const categoriesList = item.lastElementChild;
  console.log("Elements:", categoriesList.children.length);
});
