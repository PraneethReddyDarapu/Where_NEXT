var express = require("express");
var router = express.Router();
const mongoClient = require("../lib/db");
const ObjectId = require("mongodb").ObjectId;

// reviews are for tours
router.get("/:tour_id", async (req, res, next) => {
  const { tour_id } = req.params;
  const client = await mongoClient();
  const collection = client.collection("reviews");
  //   const reviews = await collection
  //     .find({ tour_id: new ObjectId(tour_id) })
  //     .toArray();

  // aggregate reviews with users exlude password
  const data = await collection
    .aggregate([
      {
        $match: {
          tour_id: new ObjectId(tour_id),
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "user_id",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $unwind: "$user",
      },
      {
        $project: {
          _id: 1,
          tour_id: 1,
          user_id: 1,
          rating: 1,
          message: 1,
          createdAt: 1,
          updatedAt: 1,
          user: {
            _id: 1,
            first_name: 1,
            last_name: 1,
            email: 1,
            createdAt: 1,
            updatedAt: 1,
          },
        },
      },
    ])
    .toArray();

  return res.json(data);
});

// Create review
router.post("/", async (req, res, next) => {
  const { tour_id, rating, message } = req.body;
  const client = await mongoClient();
  const collection = client.collection("reviews");
  const review = await collection.insertOne({
    tour_id: new ObjectId(tour_id),
    user_id: new ObjectId(req.user.id),
    rating,
    message,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  return res.json(review);
});

module.exports = router;
