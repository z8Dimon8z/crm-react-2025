const PRODUCTS = {
  "course-html": "Курс по верстке",
  "course-js": "Курс по JavaScript",
  "course-vue": "Курс по VUE JS",
  "course-php": "Курс по PHP",
  "course-wordpress": "Курс по WordPress",
};

const STATUSES = {
  new: { text: "Новый", class: "danger" },
  inwork: { text: "В работе", class: "warning" },
  complete: { text: "Завершенный", class: "success" },
};

const TEST_DATA = [
  {
    id: 1,
    date: "2023-04-20 13:52:13",
    product: "course-html",
    name: "Петр Сергеевич",
    email: "info@inbox.ru",
    phone: "+7 (909) 77-55-777",
    status: "new",
  },
  {
    id: 2,
    date: "2023-04-21 10:22:45",
    product: "course-js",
    name: "Василий Петрович",
    email: "info@gmail.ru",
    phone: "+7 (912) 34-56-789",
    status: "inwork",
  },
  {
    id: 3,
    date: "2023-04-22 15:30:10",
    product: "course-vue",
    name: "Николай Владимирович",
    email: "info@mail.ru",
    phone: "+7 (923) 45-67-890",
    status: "complete",
  },
];
