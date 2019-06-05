const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
  `mongodb+srv://mathchaves:${
    process.env.MONGODB_PASSWORD
  }@cluster0-wlooi.mongodb.net/test?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
