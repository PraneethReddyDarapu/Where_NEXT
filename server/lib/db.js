const { MongoClient } = require("mongodb");

async function connect() {
  try {
    const client = new MongoClient("mongodb://localhost:27017", {
      useUnifiedTopology: true,
    });
    await client.connect();
    console.log("Connected successfully to server");
    return client.db("where_next");
  } catch (error) {
    console.error(error);
  }
}

module.exports = connect;
