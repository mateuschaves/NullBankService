const express = require("express");

const PaymentController = require("./controllers/PaymentController");
const UserController = require("./controllers/UserController");

const router = express.Router();

router.post("/payment", PaymentController.store);
router.post("/user", UserController.store);
router.post("/user/login", UserController.auth);

router.get("/oi", (req, res) => {
  return res.status(200).json({
    oi: "razão da minha libido"
  });
});

module.exports = router;
