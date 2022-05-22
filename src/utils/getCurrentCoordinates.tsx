export default async function getCurrentCoordinates(): Promise<Array<number>> {
  const {
    coords: { latitude, longitude },
  } = await new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej);
  });
  return [latitude, longitude];
}
