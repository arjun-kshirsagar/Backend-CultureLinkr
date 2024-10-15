module.exports = function calculateTotal(products) {
    return products.reduce((sum, product) => {
      const { price, quantity } = product;
      return sum + (price * quantity);
    }, 0);
  };
  