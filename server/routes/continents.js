var express = require("express");
var router = express.Router();
const mongoClient = require("../lib/db");
const ObjectId = require("mongodb").ObjectId;

/* Get all continents */
router.get("/", async (req, res, next) => {
  const client = await mongoClient();
  const collection = client.collection("continents");
  const continents = await collection.find({}).toArray();
  return res.json(continents);
});

/* Get continent by Id */
router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  const client = await mongoClient();
  const collection = client.collection("continents");
  const continent = await collection.findOne({ _id: new ObjectId(id) });
  return res.json(continent);
});

/* Create continent */
router.post("/", async (req, res, next) => {
  const { name, info, image, price, places } = req.body;
  const client = await mongoClient();
  const collection = client.collection("continents");
  const continent = await collection.insertOne({
    name,
    info,
    image,
    price,
    places,
  });
  return res.json({
    message: "continent created successfully",
  });
});

/* Update continent */
router.patch("/:id", async (req, res, next) => {
  const { id } = req.params;
  const { name, info, image, price, places } = req.body;
  const client = await mongoClient();
  const collection = client.collection("continents");
  const continent = await collection.updateOne(
    { _id: new ObjectId(id) },
    {
      $set: {
        name,
        info,
        image,
        price,
        places,
      },
    }
  );
  return res.json({
    message: "continent updated successfully",
  });
});

/* Delete continent */
router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  const client = await mongoClient();
  const collection = client.collection("continents");
  const continent = await collection.deleteOne({ _id: new ObjectId(id) });
  return res.json({
    message: "continent deleted successfully",
  });
});

module.exports = router;
