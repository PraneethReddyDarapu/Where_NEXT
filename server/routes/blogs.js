var express = require("express");
var router = express.Router();
const mongoClient = require("../lib/db");
const ObjectId = require("mongodb").ObjectId;
const multer = require("multer");
const auth = require("../lib/middleware");

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

/* Get all blogs */
router.get("/", async (req, res, next) => {
  const client = await mongoClient();
  const collection = client.collection("blogs");
  const blogs = await collection.find({}).toArray();
  return res.json(blogs);
});

/* Get blog by Id */
router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  const client = await mongoClient();
  const collection = client.collection("blogs");
  const blog = await collection.findOne({ _id: new ObjectId(id) });
  return res.json(blog);
});

/* Create blog */
router.post("/", auth, upload.single("image"), async (req, res, next) => {
  const { title, social_url, description, link, continent } = req.body;
  const { id } = req.user;
  const client = await mongoClient();
  const collection = client.collection("blogs");
  const blog = await collection.insertOne({
    image: req.file.filename,
    social_url,
    description,
    link,
    title,
    continent,
    user_id: new ObjectId(id),
  });
  return res.json({
    message: "Blog created successfully",
  });
});

/* Update blog */
router.patch("/:id", upload.single("image"), async (req, res, next) => {
  const { id } = req.params;
  const { social_url, description } = req.body;
  const { user_id } = req.user;
  const client = await mongoClient();
  const collection = client.collection("blogs");
  const image = req.file ? req.file.filename : null;
  const blog = await collection.updateOne(
    { _id: new ObjectId(id) },
    {
      $set: {
        // add image only if it exists
        ...(image && { image }),
        social_url,
        description,
        user_id,
      },
    }
  );
  return res.json({
    message: "Blog updated successfully",
  });
});

/* Delete blog */
router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  const client = await mongoClient();
  const collection = client.collection("blogs");
  const blog = await collection.deleteOne({ _id: new ObjectId(id) });
  return res.json({
    message: "Blog deleted successfully",
  });
});

module.exports = router;
