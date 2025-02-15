import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connection to DB successful!");
    })
    .catch((err) => {
      console.log(`Connection to DB failed! ERROR:${err}`);
    });
};

export default connectDB;
