const Payment = require("../models/Payment");

module.exports = {
  async store(req, res) {
    try {
      const payment = await Payment.create(req.body);
      if (payment)
        return res.status(201).json({
          message: "Compra realizada com sucesso !",
          error: false
        });
      else
        return res.status(400).json({
          message: "Erro ao realizar transação",
          error: true
        });
    } catch (error) {
      return res.status(400).json({
        message: "Erro ao realizar transação",
        error: true
      });
    }
  }
};
