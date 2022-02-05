export default function formatePrecipitation(precipitation) {
  return `${Math.round(precipitation * 100)}%`;
}
