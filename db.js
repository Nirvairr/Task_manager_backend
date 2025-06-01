const mongoose = require("mongoose");

const connectToMongo = async () => {
  try {
    await mongoose.connect("mongodb+srv://nirvairjot710:%24%24%24SkyBlue0710%24%24%24@cluster0.pjgkh0y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
");
    console.log("Connected To MongoDB Successfully");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;
