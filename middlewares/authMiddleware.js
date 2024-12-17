import { UnauthenticatedError } from "../errors/customError.js";

export const authenticateUser = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) throw new UnauthenticatedError("authentication invalid");

  console.log("authenticating user");
  next();
};
