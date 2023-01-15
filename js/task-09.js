// Напиши скрипт, який змінює кольори фону елемента < body >
//   через інлайн - стиль по кліку на button.change-color
//   і виводить значення кольору в span.color.

// Для генерування випадкового кольору використовуй
// функцію getRandomHexColor.

const bodyColor = document.querySelector("body");
const textColorOnBody = document.querySelector(".color");
const buttonColor = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

buttonColor.addEventListener("click", onChangeColor);

function onChangeColor(event) {
  textColorOnBody.textContent = getRandomHexColor();
  bodyColor.style.backgroundColor = textColorOnBody.textContent;
}
