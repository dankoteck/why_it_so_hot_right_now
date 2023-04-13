// reference: https://stackoverflow.com/a/8511350/9937322
export function isObject(value: unknown) {
  return typeof value === "object" && !Array.isArray(value) && value !== null;
}
