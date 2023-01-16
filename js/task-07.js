// Напиши скрипт, який реагує на зміну значення
// input#font-size-control(подія input) і змінює інлайн - стиль
// span#text, оновлюючи властивість font-size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const inputRange = document.getElementById("font-size-control");
const textOutput = document.getElementById("text");

inputRange.addEventListener("input", onTextChange);
textOutput.style.fontSize = `${inputRange.value}px`;

function onTextChange(event) {
  textOutput.style.fontSize = `${event.currentTarget.value}px`;
}
