const Payment = require("../models/Payment");
const User = require("../models/User");

module.exports = {
  async store(req, res) {
    try {
      const payment = await Payment.create(req.body);
      const user = await User.findById(req.body.user);
      if (user.limit < req.body.price) return res.send("Sem saldo");
      user.limit -= req.body.price;
      await user.save();

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
