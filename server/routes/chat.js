var express = require("express");
var router = express.Router();
const mongoClient = require("../lib/db");
const ObjectId = require("mongodb").ObjectId;
const PubSub = require("pubsub-js");

// Get all chat
router.get("/:hangout_id", async (req, res, next) => {
  try {
    const { hangout_id } = req.params;
    const { user_id, type } = req.query;
    console.log({ hangout_id, user_id });
    const client = await mongoClient();
    const collection = client.collection("chat");

    let match = {};
    if (type == "personal") {
      match = {
        $or: [
          {
            user_id: new ObjectId(user_id),
            type: "personal",
          },
          {
            target_user_id: new ObjectId(user_id),
            type: "personal",
          },
          {
            user_id: new ObjectId(req.user.id),
            type: "personal",
          },
          {
            target_user_id: new ObjectId(req.user.id),
            type: "personal",
          },
        ],
      };
    } else {
      match = {
        hangout_id: new ObjectId(hangout_id),
        type: "group",
      };
    }

    let chats = collection.aggregate([
      // join with users table
      {
        $lookup: {
          from: "users", // name of the foreign collection

          localField: "user_id", // name of the chat's field to match with foreign collection's field

          foreignField: "_id", // name of the foreign collection's field to match with chat's field

          as: "user", // alias for user information in chat object
        },
      },
      //   match by hangout id
      { $match: match },

      // select only necessary fields
      { $project: { _id: 0, user_id: 1, message: 1, created_at: 1, user: 1 } },
    ]);
    chats = await chats.toArray();

    return res.json(chats);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Post chat
router.post("/:hangout_id", async (req, res, next) => {
  try {
    const { hangout_id } = req.params;
    const { message, type } = req.body;
    const client = await mongoClient();
    const collection = client.collection("chat");
    const hangoutCollection = client.collection("hangouts");

    let hangoutObj = null;
    let data = {};
    if (type == "group") {
      hangoutObj = await hangoutCollection.findOne({
        _id: new ObjectId(hangout_id),
      });
      if (!hangoutObj) {
        return res.status(404).json({ message: "Hangout not found" });
      }
      data = {
        message,
        type,
        user_id: new ObjectId(req.user.id),
        target_user_id: new ObjectId(hangoutObj.user_id),
        hangout_id: new ObjectId(hangout_id),
        created_at: new Date(),
      };
      PubSub.publish("chat", {
        hangout_id: hangout_id,
      });
    } else {
      data = {
        message,
        type,
        user_id: new ObjectId(req.user.id),
        target_user_id: new ObjectId(hangout_id),
        created_at: new Date(),
      };
      PubSub.publish("chat_personal", {
        user_id: hangout_id,
        target_user_id: req.user.id,
      });
    }
    const hangout = await collection.insertOne(data);

    // send message to pubsub-js

    return res.json({ message: "Message sent successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
