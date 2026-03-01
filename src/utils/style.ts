// utility helpers unrelated to component registry or API types

export function toRem(value?: number | string) {
  if (value === undefined || value === null) return undefined;
  const num = typeof value === "string" ? parseInt(value, 10) : value;
  if (isNaN(num)) return undefined;
  return `${num * 0.25}rem`;
}
