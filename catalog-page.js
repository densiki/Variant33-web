// Данные и поиск для страницы каталога.
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

function filterByText(items, query) {
  const normalized = query.trim().toLowerCase();
  if (normalized === "") {
    return items;
  }
  return items.filter(item => item.name.toLowerCase().includes(normalized));
}

const catalogList = document.querySelector("#catalog-list");
const statusText = document.querySelector("#status");

function renderCatalog(items) {
  catalogList.replaceChildren();

  for (const item of items) {
    const card = document.createElement("article");
    card.className = "card";

    const title = document.createElement("h2");
    title.textContent = item.name;

    const specs = document.createElement("p");
    specs.className = "specs";
    specs.textContent = item.specs;

    const description = document.createElement("p");
    description.className = "description";
    description.textContent = item.description;

    card.append(title, specs, description);
    catalogList.append(card);
  }

  if (items.length === 0) {
    statusText.textContent = "Ничего не найдено";
  } else {
    statusText.textContent = "Показано: " + items.length + " из " + catalog.length;
  }
}

renderCatalog(catalog);

const searchInput = document.querySelector("#search");

searchInput.addEventListener("input", function () {
  const found = filterByText(catalog, searchInput.value);
  renderCatalog(found);
});
