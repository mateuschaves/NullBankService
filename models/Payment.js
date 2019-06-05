const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    enum: ["credit", "debit"],
    required: true
  },
  quota: {
    type: Number,
    default: 0,
    required: false
  }
});

module.exports = mongoose.model("Payment", PaymentSchema);
