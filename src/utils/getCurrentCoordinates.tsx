export default async function getCurrentCoordinates() {
  const {
    coords: { latitude, longitude },
  } = await new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej);
  });
  return [latitude, longitude];
}
