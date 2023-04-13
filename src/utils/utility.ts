export function degToCompass(num: number) {
  const val = Math.round(num / 22.5 + 0.5);
  const arr = [
    "N", // North
    "NNE", // North-North-East
    "NE", // North-East
    "ENE", // East-North-East
    "E", // East
    "ESE", // East-South-East
    "SE", // South-East
    "SSE", // South-South-East
    "S", // South
    "SSW", // South-South-East
    "SW", // South-West
    "WSW", // West-South-West
    "W", // West
    "WNW", // West-North-West
    "NW", // North-West
    "NNW", // North-North-West
  ];
  return arr[val % 16];
}
