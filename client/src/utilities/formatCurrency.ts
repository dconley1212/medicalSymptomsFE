const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

export function formatCurrent(price: number) {
  return CURRENCY_FORMATTER.format(price);
}
