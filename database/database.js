import mongoose from "mongoose";

export const connectToDatabase = () => {
  try {
    mongoose.connect(
      process.env.DB_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => {
        console.log("Connected to database...");
      }
    );
  } catch (error) {
    console.error(`Can't Connect To Database...`);
  }
};
