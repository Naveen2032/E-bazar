const mongoose = require("mongoose");
// const MongoURI = "mongodb://localhost:27017/product-crud";
const MongoURI = "mongodb://127.0.0.1:27017/product-crud";
const connectToMongoDb = async () => {
  try {
    await mongoose.connect(MongoURI);
    console.log("MongoDb connection established!");
  } catch (error) {
    console.log("MongoDb connection error : " + error);
  }
};

module.exports = connectToMongoDb;
