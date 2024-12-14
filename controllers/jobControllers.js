// import { nanoid } from "nanoid";
import Job from "../models/jobModels.js";
import { StatusCodes } from "http-status-codes";
import { NotFoundError } from "../errors/customError.js";

// // temporary data.............................................................................................................

// let jobs = [
//   { id: nanoid(), company: "apple", position: "front-end" },
//   { id: nanoid(), company: "google", position: "back-end" },
// ];

// middlewares for routes...............................................................................................

export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({});
  res.status(StatusCodes.OK).json({ jobs });
};

export const createJob = async (req, res) => {
  const { company, position } = req.body;

  const job = await Job.create({ company, position });
  res.status(StatusCodes.CREATED).json({ job });
};

export const getJob = async (req, res) => {
  const { id } = req.params;

  const job = await Job.findById(id);

  if (!job) throw new NotFoundError(`job with id ${id} doesn't exist`);
  return res.status(StatusCodes.OK).json({ job });
};

export const updateJob = async (req, res) => {
  const { id } = req.params;
  const updatedJob = await Job.findByIdAndUpdate(id, req.body, { new: true });

  if (!updatedJob) new NotFoundError(`job with id ${id} doesn't exist`);

  res.status(StatusCodes.OK).json({ message: "job modified", job: updatedJob });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const removedJob = await Job.findByIdAndDelete(id);

  if (!removedJob) new NotFoundError(`job with id ${id} doesn't exist`);
  res.status(StatusCodes.OK).json({ message: "job deleted", job: removedJob });
};
