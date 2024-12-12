import { nanoid } from "nanoid";
import Job from "../models/jobModels.js";

// temporary data.............................................................................................................

let jobs = [
  { id: nanoid(), company: "apple", position: "front-end" },
  { id: nanoid(), company: "google", position: "back-end" },
];

// middlewares for routes...............................................................................................

export const getAllJobs = async (req, res) => {
  res.status(200).json({ jobs });
};

export const createJob = async (req, res) => {
  const { company, position } = req.body;

  const job = await Job.create({ company, position });

  res.status(201).json({ job });
};

export const getJob = async (req, res) => {
  const { id } = req.params;

  const job = jobs.find((job) => job.id === id);

  if (!job) {
    return res.status(404).json({ message: `Job with the ${id} doesnt exist` });
  }

  return res.status(200).json({ job });
};

export const updateJob = async (req, res) => {
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
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;

  const job = jobs.find((job) => job.id === id);

  if (!job) {
    return res.status(404).json({ message: `job with id ${id} doesnt exist` });
  }

  const newJobs = jobs.filter((job) => job.id !== id);
  jobs = newJobs;

  res.status(200).json({ message: "job deleted" });
};