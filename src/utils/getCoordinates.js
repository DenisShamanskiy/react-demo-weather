export default async function getCoordinates() {
  const {
    coords: { latitude, longitude },
  } = await new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej);
  });
  return new Array(latitude, longitude);
}
