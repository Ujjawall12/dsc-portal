const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect("mongodb://localhost:27017/dsc-portal");
    console.log(`MongoDB connected to ${connect.connection.port}`);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = connectDB;
