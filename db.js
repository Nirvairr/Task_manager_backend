const mongoose = require("mongoose");

const connectToMongo = async () => {
  try {
    await mongoose.connect("mongodb+srv://nirvairjot710:$$$SkyBlue0710$$$@cluster0.pjgkh0y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Connected To MongoDB Successfully");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;
