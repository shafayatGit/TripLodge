import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log("Db Connected");
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1); // stop the server if DB fails
  }
};

export default connectDB;
