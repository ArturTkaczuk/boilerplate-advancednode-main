// Do not change this file
require("dotenv").config();
const { MongoClient } = require("mongodb");

async function main(callback) {
  //   const URI = process.env.MONGO_URI; // Declare MONGO_URI in your .env file
  const client = new MongoClient(
    "mongodb+srv://Admin:cH@M4KXvPHMWqa5@cluster0.38rnvbr.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Make the appropriate DB calls
    await callback(client);
    console.log("Successfully connected to the Database");
  } catch (e) {
    // Catch any errors
    console.error(e);
    throw new Error("Unable to Connect to Database");
  }
}

module.exports = main;
