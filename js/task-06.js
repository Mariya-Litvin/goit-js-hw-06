// Напиши скрипт, який під час втрати фокусу на інпуті
// (подія blur), перевіряє його вміст щодо правильної
// кількості введених символів.

// Яка кількість символів повинна бути в інпуті,
// зазначається в його атрибуті data - length.

// 1. Якщо введена правильна кількість символів, то border
// інпуту стає зеленим, якщо неправильна кількість - червоним.
// 2. Для додавання стилів використовуй CSS - класи valid і
// invalid, які ми вже додали у вихідні файли завдання.

const textInput = document.getElementById("validation-input");
const textLength = Number(textInput.getAttribute("data-length"));

textInput.addEventListener("blur", onInputBlur);

function addClass(nameClass) {
  textInput.classList.add(nameClass);
}

function removeСlass(nameClass) {
  textInput.classList.remove(nameClass);
}

function onInputBlur(event) {
  if (textInput.value.length === textLength) {
    removeСlass("invalid");
    addClass("valid");
  } else {
    removeСlass("valid");
    addClass("invalid");
  }
}
