export default function timeFormate(time, timeZone) {
  const hours = new Date(
    (time + (timeZone !== 10800 ? timeZone - 10800 : 0)) * 1000
  ).getHours();
  const minutes = new Date(time * 1000).getMinutes();
  return `${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }`;
}
