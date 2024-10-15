exports.calculateTotalValue = (req, res) => {
    const { products } = req.body;
  
    if (!products || !Array.isArray(products)) {
      return res.status(400).json({ error: "Invalid input. Expected an array of products." });
    }
  
    const totalValue = products.reduce((sum, product) => {
      const { price, quantity } = product;
      return sum + (price * quantity);
    }, 0);
  
    return res.json({ totalValue });
  };
  