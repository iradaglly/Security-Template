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

const SecuritySchema = new mongoose.Schema({
  title: String,
  desc: String,
  likeCount: Number,
  commentCount: Number
});
const SecurityModel = mongoose.model("security", SecuritySchema);

// get all
app.get("/security", async (req, res) => {
  const { title } = req.query;
  const security = await SecurityModel.find();
  if (title === undefined) {
    res.status(200).send(security);
  } else {
    res
      .status(200)
      .send(
        authors.filter((x) =>
          x.title.toLowerCase().trim().includes(title.toLowerCase().trim())
        )
      );
  }
});
// get by id 
app.get("/security/:id", async (req, res) => {
  const id = req.params.id;
  const sec = await SecurityModel.findById(id);
  if (!sec) {
    res.status(204).send("author not found!");
  } else {
    res.status(200).send(sec);
  }
});
//post
app.post("/security", async (req, res) => {
  const { title, desc, likeCount, commentCount } = req.body;
  const newSec = new SecurityModel({
    title: title,
    desc: desc,
    likeCount: likeCount,
    commentCount: commentCount
  });
  await newSec.save();
  res.status(201).send("created");
});

// put
app.put("/security/:id", async (req, res) => {
  const id = req.params.id;
  const { title, desc, likeCount, commentCount } = req.body;
  const existedSec = await SecurityModel.findByIdAndUpdate(id, {
    title: title,
    desc: desc,
    likeCount: likeCount,
    commentCount: commentCount
  });
  if (existedSec == undefined) {
    res.status(404).send("sec not found!");
  } else {
    res.status(200).send(`${title} updated successfully!`);
  }
});


PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`NODE APP listening on port ${PORT}`);
});