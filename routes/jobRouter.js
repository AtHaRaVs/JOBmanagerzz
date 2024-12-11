import { Router } from "express";

const router = Router();

import {
  getAllJobs,
  createJob,
  updateJob,
  deleteJob,
  getJob,
} from "../controllers/jobControllers.js";

router.route("/").get(getAllJobs).post(createJob);
router.route("/:id").get(getJob).patch(updateJob).delete(deleteJob);

export default router;
