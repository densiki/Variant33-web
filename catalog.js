// Вариант 29 · «Афиша вечера»
// Пара 21: обработка списка записей. Результат виден в консоли.

// Данные карточек. Поля те же, что и в разметке каталога.
const catalog = [
  {
    position: 1,
    name: "Кино и обсуждение",
    specs: "Кинопоказ · зал 2",
    description: "Просмотр и разговор после фильма",
  },
  {
    position: 2,
    name: "Поэтический круг",
    specs: "Встреча · зал 3",
    description: "Чтение стихов и открытый микрофон",
  },
  {
    position: 3,
    name: "Акустический вечер",
    specs: "Концерт · зал 1",
    description: "Небольшая сцена и живой звук",
  },
];

// Расчёт пары 20 сохраняется: стоимость выбранной записи.
let quantityText = "3";
const unitValue = 260;
const extraValue = 80;
const isTraining = true;

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

console.log("=== Расчёт пары 20 ===");
const selectedItem = catalog[0];
const quantity = Number(quantityText);
const total = quantity * unitValue + extraValue;
console.log("Название:", selectedItem.name);
console.log("Учебные данные:", isTraining);
console.log("Количество мест:", quantity);
console.log("Общая стоимость:", total, "усл. руб.");
console.log("getResult:", getResult(quantityText, unitValue, extraValue));
console.log("Тип строки количества:", typeof quantityText);
console.log("Тип количества после преобразования:", typeof quantity);
console.log("Тип итога:", typeof total);
console.log("Тип учебного признака:", typeof isTraining);

// 2. Весь список записей: три блока карточек и проверка данных таблицей.
console.log("=== 2. Таблица catalog ===");
catalog.forEach(item => {
  console.log(`--- Карточка ${item.position}: ${item.name} ---`);
  console.log("Характеристика:", item.specs);
  console.log("Описание:", item.description);
});
console.table(catalog);
console.log("catalog.length:", catalog.length);
console.log("catalog[0].name:", catalog[0].name);

// 3. map: новый массив названий, исходный catalog не меняется.
console.log("=== 3. map: список названий ===");
const names = catalog.map(item => item.name);
console.log("names:", names);
console.log("names.length:", names.length);

// 4. filter: новый массив только подходящих записей.
console.log("=== 4. filter: отбор по условию ===");
const longNames = catalog.filter(item => item.name.length > 8);
console.log("Названий длиннее 8 символов:", longNames.length);

const cinemaItems = catalog.filter(item => item.name.includes("Кино"));
console.log("Записей со словом «Кино»:", cinemaItems.length);
console.log(
  "Их названия:",
  cinemaItems.map(item => item.name)
);

// 5. find: первая подходящая запись или undefined.
console.log("=== 5. find: одна запись ===");
const selectedName = "Кино и обсуждение";
const found = catalog.find(item => item.name === selectedName);
console.log("found:", found);

if (found) {
  console.log("Характеристика:", found.specs);
  console.log("Описание:", found.description);
} else {
  console.log("Запись не найдена");
}

const notFound = catalog.find(item => item.name === "кино и обсуждение");
console.log("Неточное совпадение (регистр):", notFound);
if (notFound) {
  console.log("Характеристика:", notFound.specs);
} else {
  console.log("Запись не найдена");
}

// 6. Обработка списка отдельной функцией.
// Пустой запрос возвращает все записи; регистр и пробелы не важны.
function filterByText(items, query) {
  const normalized = query.trim().toLowerCase();
  if (normalized === "") {
    return items;
  }
  return items.filter(item => item.name.toLowerCase().includes(normalized));
}

// 7. Прогон испытаний filterByText.
console.log("=== 6–7. filterByText: испытания ===");
console.log('filterByText(catalog, "").length:', filterByText(catalog, "").length);
console.log(
  'filterByText(catalog, "Кино"):',
  filterByText(catalog, "Кино")
);
console.log(
  'filterByText(catalog, "  АКУСТИЧЕСКИЙ  ").length:',
  filterByText(catalog, "  АКУСТИЧЕСКИЙ  ").length
);
console.log(
  'filterByText(catalog, "нет такой записи"):',
  filterByText(catalog, "нет такой записи")
);
console.log(
  'filterByText(catalog, "нет такой записи").length:',
  filterByText(catalog, "нет такой записи").length
);

// Опыт: поиск по другому свойству — по характеристике specs.
// Уместен, когда пользователь ищет по залу, формату или площадке.
const bySpecs = catalog.filter(item =>
  item.specs.toLowerCase().includes("зал 2")
);
console.log("Опыт по specs, «зал 2»:", bySpecs.map(item => item.name));

// Итог для показа: таблица, названия, три запроса и найденная запись.
console.log("=== Итог ===");
console.table(catalog);
console.log("Массив названий:", names);
console.log('Запрос "":', filterByText(catalog, "").length, "записей");
console.log(
  'Запрос "Кино":',
  filterByText(catalog, "Кино").map(item => item.name)
);
console.log(
  'Запрос "  АКУСТИЧЕСКИЙ  ":',
  filterByText(catalog, "  АКУСТИЧЕСКИЙ  ").map(item => item.name)
);
console.log(
  'Запрос "нет такой записи":',
  filterByText(catalog, "нет такой записи").length,
  "записей"
);

const foundItem = catalog.find(item => item.name === "Поэтический круг");
console.log("Найденная запись:", foundItem);
if (foundItem) {
  console.log("Её характеристика:", foundItem.specs);
} else {
  console.log("Запись не найдена");
}

// 3–4. DOM: находим абзац по id и меняем его текст.
const status = document.querySelector("#status");
status.textContent = "Записей в каталоге: " + catalog.length;

const first = catalog[0].name;
status.textContent =
  "Записей в каталоге: " + catalog.length + ". Первая карточка: " + first;

// 5. DOM: создаём пункты списка из массива catalog.
const namesList = document.querySelector("#names");

// До нажатия кнопки список должен быть пустым.
namesList.replaceChildren();

function renderNames() {
  namesList.replaceChildren();
  for (const item of catalog) {
    const line = document.createElement("li");
    line.textContent = item.name;
    namesList.append(line);
  }
}

// 6. Событие click: передаём функцию-обработчик без скобок.
const showButton = document.querySelector("#show-names");
showButton.addEventListener("click", renderNames);
