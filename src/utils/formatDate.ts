const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

/** "2026-10-18" → "18 de out. de 2026" (uppercase applied in CSS). */
export function formatDevlogDate(isoDate: string): string {
  const parsed = new Date(`${isoDate}T12:00:00Z`);
  return dateFormatter.format(parsed).replace(/\.$/, "");
}