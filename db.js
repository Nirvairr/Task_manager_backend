const mongoose = require("mongoose");

require('dotenv').config();


const connectToMongo = async () => {
  try {
    await mongoose.connect(process.env.Mongo_URI);
    console.log("Connected To MongoDB Successfully");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;
