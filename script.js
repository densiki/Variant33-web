const itemName = "Кино и обсуждение";
let quantityText = "3";
const unitValue = 260;
const extraValue = 80;
const isTraining = true;

const quantity = Number(quantityText);
const total = unitValue * quantity + extraValue;

console.log("Название:", itemName);
console.log("Учебные данные:", isTraining);
console.log("Количество мест:", quantity);
console.log("Общая стоимость:", total, "усл. руб.");
console.log("Тип строки количества:", typeof quantityText);
console.log("Тип количества после преобразования:", typeof quantity);
console.log("Тип итога:", typeof total);
console.log("Тип учебного признака:", typeof isTraining);