/** "2026-10-18" → "18 de out. de 2026" (uppercase applied in CSS). */
export function formatDevlogDate(isoDate: string, locale: "pt-BR" | "en-US"): string {
  const formatter = new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

  return formatter
    .format(new Date(`${isoDate}T12:00:00Z`))
    .replace(/\.$/, "");
}