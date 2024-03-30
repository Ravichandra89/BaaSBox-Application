import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/user.route.js';

dotenv.config();

// Connecting DB
const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO)
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

app.use('/api/users', userRouter);