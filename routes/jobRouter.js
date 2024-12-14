import { Router } from "express";
import {
  validateJobInput,
  validateIdParam,
} from "../middlewares/validationMiddleware.js";

const router = Router();

import {
  getAllJobs,
  createJob,
  updateJob,
  deleteJob,
  getJob,
} from "../controllers/jobControllers.js";

router.route("/").get(getAllJobs).post(validateJobInput, createJob);
router
  .route("/:id")
  .get(validateIdParam, getJob)
  .patch(validateJobInput, validateIdParam, updateJob)
  .delete(validateIdParam, deleteJob);

export default router;
