const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
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
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("Payment", PaymentSchema);
