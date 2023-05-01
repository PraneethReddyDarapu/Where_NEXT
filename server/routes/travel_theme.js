var express = require("express");
var router = express.Router();
const mongoClient = require("../lib/db");
const ObjectId = require("mongodb").ObjectId;

/* Get all travel_theme */
router.get("/", async (req, res, next) => {
  const client = await mongoClient();
  const collection = client.collection("travel_theme");
  const travel_theme = await collection.find({}).toArray();
  return res.json(travel_theme);
});

/* Get travel_theme by Id */
router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  const client = await mongoClient();
  const collection = client.collection("travel_theme");
  const travel_theme = await collection.findOne({ _id: new ObjectId(id) });
  return res.json(travel_theme);
});

/* Create travel_theme */
router.post("/", async (req, res, next) => {
  const { title, description, image } = req.body;
  const client = await mongoClient();
  const collection = client.collection("travel_theme");
  const travel_theme = await collection.insertOne({
    title,
    description,
    image,
  });
  return res.json({
    message: "travel_theme created successfully",
  });
});

/* Update travel_theme */
router.patch("/:id", async (req, res, next) => {
  const { id } = req.params;
  const { title, description, image } = req.body;
  const client = await mongoClient();
  const collection = client.collection("travel_theme");
  const travel_theme = await collection.updateOne(
    { _id: new ObjectId(id) },
    {
      $set: {
        title,
        description,
        image,
      },
    }
  );
  return res.json({
    message: "travel_theme updated successfully",
  });
});

/* Delete travel_theme */
router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  const client = await mongoClient();
  const collection = client.collection("travel_theme");
  const travel_theme = await collection.deleteOne({ _id: new ObjectId(id) });
  return res.json({
    message: "travel_theme deleted successfully",
  });
});

module.exports = router;
