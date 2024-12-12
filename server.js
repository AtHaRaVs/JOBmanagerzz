//imports.............................................................................................................
import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";

import jobRouter from "./routes/jobRouter.js";

//middlewares.............................................................................................................

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

// CRUD API CALLS.............................................................................................................

app.use("/api/v1/jobs", jobRouter);

// page not found and generic error middleware.............................................................................

app.use("*", (req, res) => {
  res.status(404).json({ message: "sorry page not found" });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: "something went wrong" });
});

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
