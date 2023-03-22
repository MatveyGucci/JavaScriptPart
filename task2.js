function sortSalesArray(sales) {

  const orderedSales = sales.map((sale) => {
    return {
      amount: sale.amount,
      quantity: sale.quantity,
      Total: sale.amount * sale.quantity,
    };
  });

  orderedSales.sort((a, b) => a.Total - b.Total);

  return orderedSales;
}

const sales = [
  { amount: 10000, quantity: 10 },
  { amount: 5000, quantity: 5 },
  { amount: 20000, quantity: 2 },
];
const orderedSales = sortSalesArray(sales);
console.log(orderedSales);
console.log(sales);