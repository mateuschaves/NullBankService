const express = require("express");

const PaymentController = require("./controllers/PaymentController");

const router = express.Router();

router.post("/payment", PaymentController.store);

module.exports = router;
