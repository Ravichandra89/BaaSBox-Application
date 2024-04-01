import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();

// Connecting DB
const PORT = process.env.PORT || 3000;

mongoose
  .connect(
    "mongodb+srv://ravi:ravi1234@mycluster.niru1ou.mongodb.net/?retryWrites=true&w=majority&appName=mycluster"
  )
  .then(async () => {
    await console.log("DataBase Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

// Allow express to send data through json
app.use(express.json());

app.listen(PORT, () => {
  console.log("Server Running on 3000!! ");
});

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
