class Formate {
  constructor() {}

  time(time, timeZone) {
    const hours = new Date(
      (time + (timeZone !== 10800 ? timeZone - 10800 : 0)) * 1000
    ).getHours();
    const minutes = new Date(time * 1000).getMinutes();
    return `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }`;
  }

  dayWeek(day) {
    const days = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
    return days[new Date(day * 1000).getDay()];
  }
  // Вероятность осадков для недельного прогноза
  precipitation = (precipitation) => `${Math.round(precipitation * 100)}%`;
}

const formate = new Formate();

export default formate;
