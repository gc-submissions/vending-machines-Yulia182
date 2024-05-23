const calculateChange = (total, payment) => {
  if (payment >= total) {
    return payment - total;
  } else {
    return "insufficient funds";
  }
};

const isSufficientPayment = (total, payment) => {
  if (payment >= total) {
    return true;
  } else {
    return false;
  }
};

const calculateTotal = (itemsArray) => {
  const sum = itemsArray.reduce(
    (accumulator, obj) => accumulator + obj.price,
    0
  );
  return sum;
};

const addItem = (itemsArray, name, price) => {
  itemsArray.push({ name: name, price: price });
  console.log(itemsArray);
};

const addItemV2 = (itemsArray, name, price) => {
  itemsArray.unshift({ name: name, price: price });
  console.log(itemsArray);
};

const removeItem = (itemsArray, index) => {
  itemsArray.splice(index, 1);
};

module.exports = {
  calculateChange,
  isSufficientPayment,
  calculateTotal,
  addItem,
  addItemV2,
  removeItem,
};
