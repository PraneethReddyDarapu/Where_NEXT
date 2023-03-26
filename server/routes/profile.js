var express = require("express");
var router = express.Router();
const mongoClient = require("../lib/db");
const ObjectId = require("mongodb").ObjectId;

router.get("/", async function (req, res, next) {
  const _id = req.user.id;
  console.log(req.user);
  const client = await mongoClient();
  const collection = client.collection("users");

  // find user by id
  const user = await collection.findOne({
    _id: new ObjectId(_id),
  });
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  return res.json(user);
});

/* Update profile */
// first_name, last_name, email, password
router.put("/", async function (req, res, next) {
  try {
    const _id = req.user.id;
    const { first_name, last_name, email } = req.body;
    const client = await mongoClient();
    const collection = client.collection("users");

    // find user by id
    const user = await collection.findOne({
      _id: new ObjectId(_id),
    });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // update user
    const result = await collection.findOneAndUpdate(
      { _id: new ObjectId(_id) },
      { $set: { first_name, last_name, email } }
    );
    return res.json({
      message: "User updated successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Something went wrong" });
  }
});

module.exports = router;
