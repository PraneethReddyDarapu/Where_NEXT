var express = require("express");
var router = express.Router();
const mongoClient = require("../lib/db");
const ObjectId = require("mongodb").ObjectId;

/* Get all hangouts */
router.get("/", async (req, res, next) => {
  const client = await mongoClient();
  const collection = client.collection("hangouts");

  let hangouts = collection.aggregate([
    // Add bookings field conditionally
    {
      $addFields: {
        booking: {
          $cond: {
            if: { $ne: ["$booking_id", null] },
            then: "$booking_id",
            else: [],
          },
        },
      },
    },
    // join with users table
    {
      $lookup: {
        from: "users", // name of the foreign collection
        localField: "user_id", // name of the chat's field to match with foreign collection's field
        foreignField: "_id", // name of the foreign collection's field to match with chat's field
        as: "user", // alias for user information in chat object
      },
    },
    {
      $unwind: "$user",
    },
    // join with bookings table
    {
      $lookup: {
        from: "bookings", // name of the foreign collection
        localField: "booking", // name of the chat's field to match with foreign collection's field
        foreignField: "_id", // name of the foreign collection's field to match with chat's field
        as: "booking", // alias for user information in chat object
      },
    },
    // Unwind bookings with preserveNullAndEmptyArrays option
    {
      $unwind: {
        path: "$booking",
        preserveNullAndEmptyArrays: true,
      },
    },
    // select only necessary fields
    {
      $project: {
        _id: 1,
        user_id: 1,
        title: 1,
        description: 1,
        created_at: 1,
        user: 1,
        booking: 1,
        user: {
          _id: 1,
          first_name: 1,
          last_name: 1,
        },
      },
    },
  ]);
  hangouts = await hangouts.toArray();

  // const hangouts = await collection.find().toArray();

  // let promises = hangouts.map(async (hangout) => {
  //   let bookingCollection = client.collection("bookings");
  //   let booking = await bookingCollection.findOne({
  //     _id: new ObjectId(hangout.booking_id),
  //   });
  //   hangout.booking = booking;
  //   return hangout;
  // });
  // let data = await Promise.all(promises);

  return res.json(hangouts); //return response with updated hangouts array
});

router.post("/", async (req, res, next) => {
  const client = await mongoClient();
  const collection = client.collection("hangouts");
  await collection.insertOne({
    user_id: new ObjectId(req.user.id),
    title: req.body.title,
    description: req.body.description,
    created_at: new Date(),
    booking_id: null,
  });
  return res.json({ message: "Hangout created" });
});

router.get("/personal", async (req, res, next) => {
  const client = await mongoClient();
  const collection = client.collection("chat");
  const users = await collection
    .aggregate([
      {
        $match: {
          user_id: new ObjectId(req.user.id),
        },
      },
      {
        $group: {
          _id: null,
          targetUserIds: { $addToSet: "$target_user_id" },
        },
      },
      {
        $unwind: "$targetUserIds",
      },
      {
        $lookup: {
          from: "users",
          localField: "targetUserIds",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $unwind: "$user",
      },
      {
        $lookup: {
          from: "chat",
          let: { userId: "$targetUserIds" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ["$target_user_id", "$$userId"] },
                    { $eq: ["$user_id", new ObjectId(req.user.id)] },
                  ],
                },
              },
            },
            {
              $sort: {
                created_at: -1,
              },
            },
            {
              $limit: 1,
            },
          ],
          as: "lastMessage",
        },
      },
      // merge user data with parent document and add last message object to it
      {
        $project: {
          password: 0,
        },
      },
    ])
    .toArray();
  return res.json(users);
});

/* Get hangout by Id */
router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  const client = await mongoClient();
  const collection = client.collection("hangouts");
  const hangout = await collection.findOne({
    _id: new ObjectId(id),
    // user_id: req.user.id,
  });
  if (!hangout) {
    return res.status(404).json({
      message: "Hangout not found",
    });
  }
  return res.json(hangout);
});

/* Delete hangout */
router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  const client = await mongoClient();
  const collection = client.collection("hangouts");
  const hangout = await collection.deleteOne({
    _id: new ObjectId(id),
    user_id: req.user.id,
  });
  return res.json({
    message: "hangout deleted successfully",
  });
});

module.exports = router;
