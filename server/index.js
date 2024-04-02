import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

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

// Allow express to send data through json
app.use(express.json());

app.listen(PORT, () => {
  console.log("Server Running on 3000!! ");
});

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);

app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
