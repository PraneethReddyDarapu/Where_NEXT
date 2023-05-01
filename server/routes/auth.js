var express = require("express");
var router = express.Router();
const mongoClient = require("../lib/db");
const jwt = require("jsonwebtoken");
const tours = require("./tours");

/* Signup */
// first_name, last_name, email, password
router.post("/signup", async function (req, res, next) {
  const { first_name, last_name, email, password } = req.body;
  const client = await mongoClient();
  const collection = client.collection("users");

  // find user by email
  const isExists = await collection.findOne({ email });
  if (isExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  // insert user
  const result = await collection.insertOne({
    first_name,
    last_name,
    email,
    password,
  });
  return res.json({
    message: "User created successfully",
  });
});

/* Login */
// email, password
router.post("/login", async function (req, res, next) {
  const { email, password } = req.body;
  const client = await mongoClient();
  const collection = client.collection("users");

  // find user by email and password
  const user = await collection.findOne({ email, password });
  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  // generate token
  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );
  return res.json({
    message: "User logged in successfully",
    token,
    user_id: user._id,
  });
});

// tours
router.use("/tours", function (req, res, next) {
  res.json(tours.tours);
});

// coninents
router.use("/continents", function (req, res, next) {
  res.json(tours.continents);
});

module.exports = router;
