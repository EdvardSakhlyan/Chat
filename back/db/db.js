import Mongoose from "mongoose";
import localDB from "../constants/localDB.js";

const connectDB = async () => {
  await Mongoose.connect(localDB, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  });
  console.log("MongoDB Connected");
};

export default connectDB;
