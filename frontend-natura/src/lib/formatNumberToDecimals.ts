export const formatNumberTwoDecimals = (
  value: number | null | undefined,
  decimals: number = 2
) => {
  if (value === null || value === undefined) {
    return (0).toFixed(decimals);
  }
  return value.toFixed(decimals);
};
