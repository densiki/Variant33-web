// Расчёт пары 20: перенесён без изменений.
const unitValue = 260;
const extraValue = 80;

function getResult(quantityText, unitValue, extraValue) {
  const text = String(quantityText).trim();

  if (text === "") {
    return "Укажите количество";
  }

  const quantity = Number(text);

  if (Number.isNaN(quantity)) {
    return "Введите число";
  }

  if (!Number.isInteger(quantity) || quantity <= 0) {
    return "Нужно положительное целое количество";
  }

  const total = quantity * unitValue + extraValue;
  return "Итог: " + total + " усл. руб.";
}

const form = document.querySelector("form");
const result = document.querySelector("#result");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const quantityText = document.querySelector("#quantity").value;
  const select = document.querySelector("#item");
  const itemName = select.options[select.selectedIndex].text;

  const message = getResult(quantityText, unitValue, extraValue);
  result.textContent = itemName + ". " + message;
});
