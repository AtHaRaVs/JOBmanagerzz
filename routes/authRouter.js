import { Router } from "express";

const router = Router();

import { register, login } from "../controllers/authControllers.js";
import { validateRegisterInput } from "../middlewares/validationMiddleware.js";

router.post("/register", validateRegisterInput, register);
router.post("/login", login);

export default router;
