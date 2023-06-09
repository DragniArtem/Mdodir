/* Календар */

// Підключення функціоналу "Чертоги Фрілансера"
// Підключення списку активних модулів
import { flsModules } from "../modules.js";

// Підключення модуля
import datepicker from "js-datepicker";

if (document.querySelector("[data-datepicker]")) {
  const picker = datepicker("[data-datepicker]", {
    customDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    customMonths: [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ],
    overlayButton: "Применить",
    overlayPlaceholder: "Год (4 цифры)",
    startDay: 1,
    formatter: (input, date, instance) => {
      const value = date.toLocaleDateString();
      input.value = value;
    },
    onSelect: function (input, instance, date) {},
  });
  flsModules.datepicker = picker;
}
