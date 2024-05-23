const {
  calculateChange,
  isSufficientPayment,
  calculateTotal,
  addItem,
  addItemV2,
  removeItem,
} = require("../src/js/cart-functions");

describe("calculateChange", () => {
  test("Given total 5 and payment 6, it returns 1.", () => {
    // arrange - set up dunny date
    // act - call the fn
    const change = calculateChange(5, 6);
    // assert - expect fn
    expect(change).toBe(1);
  });
  test("Given total 12.30 and payment 13.03, it returns 0.73.", () => {
    // arrange - set up dunny date
    // act - call the fn
    const change = calculateChange(12.3, 13.03);
    // assert - expect fn
    expect(change).toBeCloseTo(0.73);
  });
  test("Given total 30 and payment 25.40, it returns: insufficient funds.", () => {
    // arrange - set up dunny date
    // act - call the fn
    const change = calculateChange(30, 25.4);
    // assert - expect fn
    expect(change).toBe("insufficient funds");
  });
});

describe("isSufficientPayment", () => {
  test("Given total 5 and payment 6, it returns true.", () => {
    // arrange - set up dummy date
    // act - call the fn
    const result = isSufficientPayment(5, 6);
    // assert - expect fn
    expect(result).toBe(true);
  });
  test("Given total 10 and payment 7, it returns false.", () => {
    // arrange - set up dummy date
    // act - call the fn
    const result = isSufficientPayment(10, 7);
    // assert - expect fn
    expect(result).toBe(false);
  });
  test("Given total 3 and payment 3, it returns true.", () => {
    // arrange - set up dummy date
    // act - call the fn
    const result = isSufficientPayment(3, 3);
    // assert - expect fn
    expect(result).toBe(true);
  });
  // my test
  test("Given total -2 and payment 1, it returns true.", () => {
    // arrange - set up dummy date
    // act - call the fn
    const result = isSufficientPayment(-2, 1);
    // assert - expect fn
    expect(result).toBe(true);
  });
});

describe("calculateTotal", () => {
  test("Given an itemsArray of one item with price 4.99, it returns 4.99.", () => {
    // arrange - set up dummy date
    const objArr = [{ price: 4.99 }];
    // act - call the fn
    const result = calculateTotal(objArr);
    // assert - expect fn
    expect(result).toBe(4.99);
  });
  test("Given an itemsArray of three items with prices 3.50, 12.99, and 0.03, it returns 16.52.", () => {
    // arrange - set up dummy date
    const objArr = [{ price: 3.5 }, { price: 12.99 }, { price: 0.03 }];
    // act - call the fn
    const result = calculateTotal(objArr);
    // assert - expect fn
    expect(result).toBeCloseTo(16.52);
  });
  test("Given an empty itemsArray, it returns 0;", () => {
    // arrange - set up dummy date
    const objArr = [];
    // act - call the fn
    const result = calculateTotal(objArr);
    // assert - expect fn
    expect(result).toBeCloseTo(0);
  });
  // my test
  test("Given an itemsArray of three items with prices 3.999, 12, and 0.003, it returns 16.00.", () => {
    // arrange - set up dummy date
    const objArr = [{ price: 3.05 }, { price: 12.09 }, { price: 0.08 }];
    // act - call the fn
    const result = calculateTotal(objArr);
    // assert - expect fn
    expect(result).toBeCloseTo(15.22);
  });
});

describe("addItem", () => {
  test("Call addItem with an empty itemsArray, name 'Beans' and price 3.", () => {
    // arrange - set up dummy date
    const itemsArray = [];
    // act - call the fn
    addItem(itemsArray, "Beans", 3);
    // assert - expect fn
    expect(itemsArray).toEqual([{ name: "Beans", price: 3 }]);
  });
  test("Create an itemsArray with one item in it: { name: Beans', price: 3 }. Call addItem with itemsArray, name 'Sugar' and price 2. Then check that itemsArray has two items in it: { name: 'Beans', price: 3 } and { name: 'Sugar', price: 2 }.", () => {
    // arrange - set up dummy date
    const itemsArray = [{ name: "Beans", price: 3 }];
    // act - call the fn
    addItem(itemsArray, "Sugar", 2);
    // assert - expect fn
    expect(itemsArray).toEqual([
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
    ]);
  });
  // my test
  test("Create an itemsArray with three items in it, {name 'Beans' and price 3}, {name: 'Sugar', price: 2}, {name: 'Milk', price: 5}. Then call assItemV2 with itemsArray, name: 'Bread' and price: 1 and check if the new item appends in the begining of the array", () => {
    // arrange - set up dummy date
    const itemsArray = [
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
      { name: "Milk", price: 5 },
    ];
    // act - call the fn
    addItemV2(itemsArray, "Bread", 1);
    // assert - expect fn
    expect(itemsArray).toEqual([
      { name: "Bread", price: 1 },
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
      { name: "Milk", price: 5 },
    ]);
  });
});

describe("removeItem", () => {
  test("Remove the first element from an array of three items.", () => {
    // arrange - set up dummy date
    itemsArray = [
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
      { name: "Milk", price: 5 },
    ];
    // act - call the fn
    removeItem(itemsArray, 0);
    // assert - expect fn
    expect(itemsArray).toEqual([
      { name: "Sugar", price: 2 },
      { name: "Milk", price: 5 },
    ]);
  });
  test("Remove the last element from an array of three items.", () => {
    // arrange - set up dummy date
    itemsArray = [
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
      { name: "Milk", price: 5 },
    ];
    // act - call the fn
    removeItem(itemsArray, 2);
    // assert - expect fn
    expect(itemsArray).toEqual([
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
    ]);
  });
  test("Remove the middle element from an array of three items.", () => {
    // arrange - set up dummy date
    itemsArray = [
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
      { name: "Milk", price: 5 },
    ];
    // act - call the fn
    removeItem(itemsArray, 1);
    // assert - expect fn
    expect(itemsArray).toEqual([
      { name: "Beans", price: 3 },
      { name: "Milk", price: 5 },
    ]);
  });
  test("Remove the only element from an array of one item.", () => {
    // arrange - set up dummy date
    itemsArray = [{ name: "Beans", price: 3 }];
    // act - call the fn
    removeItem(itemsArray, 0);
    // assert - expect fn
    expect(itemsArray).toEqual([]);
  });
});
