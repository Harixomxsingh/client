require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const app = express();
const User = require("./models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const salt = bcrypt.genSaltSync(10);
const secret = "ajkdfjadkfja73984q85ufjadfdfj4u459023@#$#^%f";
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());

mongoose.connect(process.env.MONGO_CONNECT_STRING);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.findOne({ username });
    // res.json(userDoc);
    const passOk = bcrypt.compareSync(password, userDoc.password);
    // res.json(passOk);
    if (passOk) {
      // logged in
      jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
        if (err) throw err;
        res.cookie("token", token).json({ id: userDoc._id, username });
      });
    } else {
      res.status(400).json("wrong credentials");
    }
  } catch (error) {
    res.json(error);
    console.log(error);
  }
});

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  });
  // res.json(req.cookies);
});
app.post("/logout", (req, res) => {
  res.cookie("token", "").json("ok");
});
app.listen(process.env.PORT, () => {
  console.log(`server is on port: ${process.env.PORT}`);
});
