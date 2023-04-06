var express = require("express");
var router = express.Router();
const mongoClient = require("../lib/db");
const ObjectId = require("mongodb").ObjectId;

// find and add a row in not_interested collection
router.post("/", async (req, res, next) => {
  const { tour_id } = req.body;
  const user_id = req.user.id;
  const client = await mongoClient();
  const collection = client.collection("not_interested");
  const data = await collection
    .find({ user_id: new ObjectId(user_id), tour_id: new ObjectId(tour_id) })
    .toArray();
  if (data.length === 0) {
    const result = await collection.insertOne({
      user_id: new ObjectId(user_id),
      tour_id: new ObjectId(tour_id),
    });
    return res.json({
      message: "The tour has been added to not interested list",
    });
  } else {
    return res.json({ message: "already added" });
  }
});

module.exports = router;
