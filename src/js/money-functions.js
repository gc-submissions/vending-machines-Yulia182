const formatCurrency = (amount) => {
  if (amount >= 0) {
    return "$" + amount.toFixed(2);
  } else {
    return "-$" + Math.abs(amount).toFixed(2);
  }
};

const getCoins = (cents) => {
  let remainingCents = cents;
  let change = { quarters: 0, dimes: 0, nickels: 0, pennies: 0 };
  while (remainingCents > 0) {
    if (remainingCents >= 25) {
      change.quarters++;
      remainingCents -= 25;
    }
    if (remainingCents >= 10) {
      change.dimes++;
      remainingCents -= 10;
    }
    if (remainingCents >= 5) {
      change.nickels++;
      remainingCents -= 5;
    }
    if (remainingCents >= 1) {
      change.pennies++;
      remainingCents -= 1;
    }
  }
  return change;
};

module.exports = {
  formatCurrency,
  getCoins,
};
