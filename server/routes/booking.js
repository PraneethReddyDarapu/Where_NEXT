var express = require("express");
var router = express.Router();
const mongoClient = require("../lib/db");
const ObjectId = require("mongodb").ObjectId;

// Get all bookings
router.get("/", async (req, res, next) => {
  const client = await mongoClient();
  const collection = client.collection("bookings");
  const bookings = await collection.find({}).toArray();
  return res.json(bookings);
});

/* Get booking by Id */
router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  const client = await mongoClient();
  const collection = client.collection("bookings");
  const booking = await collection.findOne({ _id: new ObjectId(id) });
  return res.json(booking);
});

/* Create booking */
router.post("/", async (req, res, next) => {
  const {
    origin,
    start_date,
    end_date,
    trip_type,
    is_hangout_enabled,
    payment_details,
  } = req.body;
  const client = await mongoClient();
  const collection = client.collection("bookings");
  const booking = await collection.insertOne({
    origin,
    user_id: new ObjectId(req.user.id),
    start_date,
    end_date,
    trip_type,
    is_hangout_enabled,
    payment_details,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  console.log(booking);

  // create hangout
  // create new hangout if bookings hangout_enabled = true
  if (is_hangout_enabled === "Y") {
    let hangoutcollection = client.collection("hangouts");
    const hangout = await hangoutcollection.insertOne({
      title: req.body.hangout_title,
      description: req.body.hangout_description,
      booking_id: new ObjectId(booking.insertedId),
      user_id: new ObjectId(req.user.id),
    });
  }
  return res.json({
    message: "Booking created successfully",
  });
});

/* Update booking */
router.patch("/:id", async (req, res, next) => {
  const { id } = req.params;
  const { origin, destination, user_id, start_date, hangout_enabled } =
    req.body;
  const client = await mongoClient();
  const collection = client.collection("bookings");
  const booking = await collection.updateOne(
    { _id: new ObjectId(id) },
    {
      $set: {
        origin,
        destination,
        user_id,
        start_date,
        hangout_enabled,
        updatedAt: new Date(),
      },
    }
  );

  // if hangout_enabled is changed to true, create a new object in hangout collection with booking_id
  if (req.body.hangout_enabled) {
    const client = await mongoClient();
    const collection = client.collection("hangouts");
    const hangout = await collection.insertOne({
      booking_id: new ObjectId(booking._id),
    });
  }

  return res.json({
    message: "Booking updated successfully",
  });
});

/* Delete booking */
router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  const client = await mongoClient();
  const collection = client.collection("bookings");
  const booking = await collection.deleteOne({ _id: new ObjectId(id) });
  // if hangout_enabled is true, delete related hangout
  if (req.body.hangout_enabled) {
    const client = await mongoClient();
    const collection = client.collection("hangouts");
    const hangout = await collection.deleteOne({
      booking_id: new ObjectId(booking._id),
    });
  }
  return res.json({
    message: "Booking deleted successfully",
  });
});

module.exports = router;
