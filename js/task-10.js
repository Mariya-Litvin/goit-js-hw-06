// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і
// натискає кнопку Створити, після чого рендериться
// колекція.Натисненням на кнопку Очистити,
//   колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один
// параметр - число.Функція створює стільки < div >,
//   скільки вказано в amount і додає їх у div#boxes.

// 1. Розміри найпершого <div> - 30px на 30px.
// 2. Кожен елемент після першого повинен бути
//  ширшим і вищим від попереднього на 10px.
// 3. Всі елементи повинні мати випадковий колір
// фону у форматі HEX.Використовуй готову функцію
//  getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст
//  div#boxes, у такий спосіб видаляючи всі створені
// елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const numberOfElements = document.querySelector("input");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const collectionOfBoxes = document.getElementById("boxes");

buttonCreate.addEventListener("click", () => {
  const amount = numberOfElements.value;
  createBoxes(amount);
});

buttonDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const arrayElement = [];
  let size = 30;
  for (let i = 1; i <= amount; i += 1) {
    const listBoxes = document.createElement("div");
    listBoxes.style.width = `${size}px`;
    listBoxes.style.height = `${size}px`;
    listBoxes.style.backgroundColor = getRandomHexColor();
    arrayElement.push(listBoxes);
    size += 10;
  }
  return collectionOfBoxes.append(...arrayElement);
}

function destroyBoxes() {
  collectionOfBoxes.innerHTML = "";
  numberOfElements.value = "";
}

// function createBoxes(amount) {
//   const arrayElement = [];
//   let size = 30;
//   for (let i = 1; i <= amount; i += 1) {
//     const listBoxes = `<div style = 'width:${size}px; height:${size}px; background-color:${getRandomHexColor()}'></div>`;
//     arrayElement.push(listBoxes);
//     size += 10;
//   }
//   let arrayNew = arrayElement.join("");
//   collectionOfBoxes.insertAdjacentHTML("beforeend", arrayNew);
// }
