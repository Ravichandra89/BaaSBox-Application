import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Connecting DB
const PORT = process.env.PORT || 3000;

mongoose
  .connect('mongodb+srv://ravi:ravi1234@mycluster.niru1ou.mongodb.net/?retryWrites=true&w=majority&appName=mycluster')
  .then(async () => {
    await console.log("DataBase Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(PORT, () => {
  console.log("Server Running on 3000!! ");
});
