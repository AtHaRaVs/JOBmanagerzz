//imports.............................................................................................................

import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import morgan from "morgan";
import { nanoid } from "nanoid";

// temporary data.............................................................................................................

let jobs = [
  { id: nanoid(), company: "apple", position: "front-end" },
  { id: nanoid(), company: "google", position: "back-end" },
];

//middlewares.............................................................................................................

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

// routes.............................................................................................................

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/", (req, res) => {
  console.log(req);
  res.send({ message: "data recieved", data: req.body });
});

// CRUD API CALLS.............................................................................................................

// show all jobs
app.get("/api/v1/jobs", (req, res) => {
  res.status(200).json({ jobs });
});

// create a job
app.post("/api/v1/jobs", (req, res) => {
  const { company, position } = req.body;

  if (!company || !position) {
    return res
      .status(400)
      .json({ message: "Please provide company and position" });
  }

  const id = nanoid(10);
  const job = { id, company, position };
  jobs.push(job);

  res.status(201).json({ job });
});

// get single job
app.get("/api/v1/jobs/:id", (req, res) => {
  const { id } = req.params;

  const job = jobs.find((job) => job.id === id);

  if (!job) {
    return res.status(404).json({ message: `Job with the ${id} doesnt exist` });
  }

  return res.status(200).json({ job });
});

// edit a job
app.patch("/api/v1/jobs/:id", (req, res) => {
  const { company, position } = req.body;

  if (!company || !position) {
    return res
      .status(400)
      .json({ message: "please provide company and position" });
  }

  const { id } = req.params;

  const job = jobs.find((job) => job.id === id);

  if (!job) {
    return res.status(404).json({ message: `job with id ${id} doesnt exist` });
  }

  job.company = company;
  job.position = position;

  res.status(200).json({ message: "job modified", job });
});

// delete a job
app.delete("/api/v1/jobs/:id", (req, res) => {
  const { id } = req.params;

  const job = jobs.find((job) => job.id === id);

  if (!job) {
    return res.status(404).json({ message: `job with id ${id} doesnt exist` });
  }

  const newJobs = jobs.filter((job) => job.id !== id);
  jobs = newJobs;

  res.status(200).json({ message: "job deleted" });
});

//sever start.............................................................................................................

const port = process.env.PORT || 5100;

app.listen(port, () => {
  console.log(`server running on port ${port}...`);
});
