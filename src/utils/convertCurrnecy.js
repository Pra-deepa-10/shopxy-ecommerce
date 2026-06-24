export const convertCurrency = (amount, currency) => {
  const INR_RATE = 83;

  if (currency === "INR") {
    return amount * INR_RATE;
  }

  return amount;
};