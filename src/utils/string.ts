export function capitalizeFirst(str: string) {
  if (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return "";
}

export function buildQueryFromParams(params: Record<string, string>) {
  let paramsString = new URLSearchParams(params).toString();

  if (paramsString !== "") {
    paramsString = `?${paramsString}`;
  }

  return paramsString;
}
