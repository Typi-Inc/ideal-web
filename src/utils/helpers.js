export function values(obj) {
  if (!obj) {
    return [];
  }
  return Object.
    keys(obj).
    filter(key => key !== '$__path').
    map(key => obj[key]);
}
