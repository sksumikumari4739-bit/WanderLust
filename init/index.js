const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");


require("dotenv").config();

const MONGO_URI = process.env.ATLASDB_URL;


main()
 .then(() => {
  console.log("Connected to MongoDB");
 }) 
 .catch((err) => {
  console.error(err)
 });

async function main() {
  await mongoose.connect(MONGO_URI);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({ ...obj, owner: "6a10e4c94ef4641e538c4daf" }));
    await Listing.insertMany(initData.data);
    console.log("Database data was Initialized ");
};

initDB();