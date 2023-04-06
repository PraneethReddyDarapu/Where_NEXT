var express = require("express");
var router = express.Router();
const mongoClient = require("../lib/db");
const ObjectId = require("mongodb").ObjectId;

/* Get all tours */
router.get("/", async (req, res, next) => {
  const { search, continent_id, travel_theme_id, is_featured } = req.query;
  const client = await mongoClient();
  let where = {};
  if (continent_id && continent_id.length > 0) {
    where.continent_id = new ObjectId(continent_id);
  }
  if (is_featured && is_featured.length > 0) {
    where.is_featured = true;
  }
  if (travel_theme_id && travel_theme_id.length > 0) {
    where.travel_theme_id = new ObjectId(travel_theme_id);
  }
  if (search && search.length > 0) {
    where.name = { $regex: search, $options: "i" };
  }
  const collection = client.collection("tours");
  const tours = await collection.find(where).toArray();
  // get rows from not_interested collection
  let not_interested = [];
  if (req.user) {
    const collection = client.collection("not_interested");
    not_interested = await collection
      .find({ user_id: new ObjectId(req.user.id) })
      .toArray();
  }
  // console.log({a: not_interested})
  // if user is logged in then remove tours which are in not_interested collection
  let result = [];
  if (not_interested.length > 0) {
    const not_interested_tour_ids = not_interested.map((item) => {
      return item.tour_id.toString();
    });
    // console.log(not_interested_tour_ids)
    result = tours.filter((tour, index) => {
      console.log(not_interested_tour_ids.includes(tour._id.toString()))
      if (!not_interested_tour_ids.includes(tour._id.toString())) {
        return tour;
      }
    });
  } else {
    result = tours
  }
  // console.log(result)
  return res.json(result);
});

/* Get tour by Id */
router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  const client = await mongoClient();
  const collection = client.collection("tours");
  const tour = await collection.findOne({ _id: new ObjectId(id) });
  return res.json(tour);
});

/* Create tour */
router.post("/", async (req, res, next) => {
  try {
    const { name, info, image, price, continent_id, travel_theme_id } =
      req.body;
    console.log(req.body);
    const client = await mongoClient();
    const collection = client.collection("tours");
    const tour = await collection.insertOne({
      name,
      info,
      image,
      price,
      continent_id: new ObjectId(continent_id),
      travel_theme_id: new ObjectId(travel_theme_id),
    });
    return res.json({
      message: "Tour created successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "Something went wrong",
    });
  }
});

/* Update tour */
router.patch("/:id", async (req, res, next) => {
  const { id } = req.params;
  const { name, info, image, price, continent_id, travel_theme_id } = req.body;
  const client = await mongoClient();
  const collection = client.collection("tours");
  const tour = await collection.updateOne(
    { _id: new ObjectId(id) },
    {
      $set: {
        name,
        info,
        image,
        price,
        continent_id: new ObjectId(continent_id),
        travel_theme_id: new ObjectId(travel_theme_id),
      },
    }
  );
  return res.json({
    message: "Tour updated successfully",
  });
});

/* Delete tour */
router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  const client = await mongoClient();
  const collection = client.collection("tours");
  const tour = await collection.deleteOne({ _id: new ObjectId(id) });
  return res.json({
    message: "Tour deleted successfully",
  });
});

module.exports = router;
