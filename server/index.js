const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
const mongoose = require("mongoose");
app.use(bodyParser.json());
app.use(cors());
const dotenv = require("dotenv");
dotenv.config();

DB_CONNECTION = process.env.DB_CONNECTION;
DB_PASSWORD = process.env.DB_PASSWORD;
mongoose
  .connect(DB_CONNECTION.replace("<password>", DB_PASSWORD))
  .then(() => console.log("Mongo DB Connected!"));
