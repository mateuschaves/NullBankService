const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  limit: {
    type: Number,
    default: 500
  },
  password: {
    type: String,
    default: "123456"
  }
});

module.exports = mongoose.model("User", UserSchema);
