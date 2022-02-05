export default function formateDayWeek(day) {
  const days = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
  return days[new Date(day * 1000).getDay()];
}
