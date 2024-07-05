export function convertToISODate(dateString: string | number | undefined): string | null {
  if (!dateString || dateString === "NaN") return null;
  const dateStr = typeof dateString === "string" ? dateString : dateString.toString();
  const date = new Date(dateStr.replace(/\//g, "-"));
  return date.toISOString();
}