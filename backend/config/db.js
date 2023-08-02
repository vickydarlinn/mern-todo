const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./backend/.env" });

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to Mongo successfully");
  } catch (error) {
    console.log("Failed to connect to Mongo");
    console.log(error.message || error);
  }
};

module.exports = connectDB;
