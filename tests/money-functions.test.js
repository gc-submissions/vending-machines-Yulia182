const { formatCurrency, getCoins } = require("../src/js/money-functions");
describe("formatCurrency", () => {
  test("Given the amount 0, it returns '$0.00'.", () => {
    // arrange - set up dummy date
    // act - call the fn
    const result = formatCurrency(0);
    // assert - expect fn
    expect(result).toBe("$0.00");
  });
  test("Given the amount 1, it returns '$1.00'.", () => {
    // arrange - set up dummy date
    // act - call the fn
    const result = formatCurrency(1);
    // assert - expect fn
    expect(result).toBe("$1.00");
  });
  test("Given the amount 1.5, it returns '$1.50'.", () => {
    // arrange - set up dummy date
    // act - call the fn
    const result = formatCurrency(1.5);
    // assert - expect fn
    expect(result).toBe("$1.50");
  });
  test("Given the amount 0.01, it returns '$0.01'.", () => {
    // arrange - set up dummy date
    // act - call the fn
    const result = formatCurrency(0.01);
    // assert - expect fn
    expect(result).toBe("$0.01");
  });
  test("Given the amount 527.6789, it returns '$527.68'.", () => {
    // arrange - set up dummy date
    // act - call the fn
    const result = formatCurrency(527.6789);
    // assert - expect fn
    expect(result).toBe("$527.68");
  });
  test("Given the amount -1, it returns '-$1.00'.", () => {
    // arrange - set up dummy date
    // act - call the fn
    const result = formatCurrency(-1);
    // assert - expect fn
    expect(result).toBe("-$1.00");
  });
  // my tests
  test("Given the amount -1.5678, it returns '-$1.56'.", () => {
    // arrange - set up dummy date
    // act - call the fn
    const result = formatCurrency(-1.5678);
    // assert - expect fn
    expect(result).toBe("-$1.57");
  });
  test("Given the amount -1.2345, it returns '-$1.2345'.", () => {
    // arrange - set up dummy date
    // act - call the fn
    const result = formatCurrency(-1.2345);
    // assert - expect fn
    expect(result).toBe("-$1.23");
  });
});

describe("getCoins", () => {
  test("32 cents produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2.", () => {
    // arrange - set up dummy date
    // act - call the fn
    const result = getCoins(32);
    // assert - expect fn
    expect(result).toEqual({ quarters: 1, dimes: 0, nickels: 1, pennies: 2 });
  });
  test("10 cents produces: quarters: 0, dimes: 1, nickels: 0, pennies: 0.", () => {
    // arrange - set up dummy date
    // act - call the fn
    const result = getCoins(10);
    // assert - expect fn
    expect(result).toEqual({ quarters: 0, dimes: 1, nickels: 0, pennies: 0 });
  });
  test("27 cents produces: quarters: 1, dimes: 0, nickels: 0, pennies: 2.", () => {
    // arrange - set up dummy date
    // act - call the fn
    const result = getCoins(27);
    // assert - expect fn
    expect(result).toEqual({ quarters: 1, dimes: 0, nickels: 0, pennies: 2 });
  });
  test("68 cents produces: quarters: 2, dimes: 1, nickels: 1, pennies: 3", () => {
    // arrange - set up dummy date
    // act - call the fn
    const result = getCoins(68);
    // assert - expect fn
    expect(result).toEqual({ quarters: 2, dimes: 1, nickels: 1, pennies: 3 });
  });
});
