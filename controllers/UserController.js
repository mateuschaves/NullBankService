const User = require("../models/User");

module.exports = {
  async store(req, res) {
    console.log(req.body);
    try {
      const user = await User.create(req.body);
      const users = await User.find();
      console.log(users);
      if (user)
        return res.status(201).json({
          message: "Usuário cadastrado com sucesso !",
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
  },

  async auth(req, res) {
    const { id, password } = req.body;
    const user = await User.findById(id);
    if (user.password != password) return res.send("Wrong password");
    else return res.send("Sucess !");
  }
};
