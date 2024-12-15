//imports.............................................................................................................
import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";

// router imports

import jobRouter from "./routes/jobRouter.js";
import authRouter from "./routes/authRouter.js";

// middleware imports

import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";

//middlewares.............................................................................................................

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

// CRUD API CALLS.............................................................................................................

app.use("/api/v1/jobs", jobRouter);
app.use("/api/v1/auth", authRouter);

// page not found and generic error middleware.............................................................................

app.use("*", (req, res) => {
  res.status(404).json({ message: "sorry page not found" });
});

app.use(errorHandlerMiddleware);

//sever start.............................................................................................................

const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on port ${port}...`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
