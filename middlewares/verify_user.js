import { userModel } from "../models/user_model.js";
import jwt from "jsonwebtoken";
import Errorhandler from "./handle_error.js";

export const verifyUser = async (req, res, next) => {
  // getting the token from auth header
  const authHeader = req.headers.authorization;
  if (!authHeader) return next(new Errorhandler(404, "No jwt token found"));

  const token = authHeader.split(" ")[1];
  // if there is404, no token
  if (!token) return next(new Errorhandler(404, "No jwt token found"));

  // verify token
  jwt.verify(token, process.env.JWT_SECRET, async (err, res) => {
    if (err) return next(new Errorhandler(403, "Invalid Jwt Token"));

    // getting user from the req token and sendting it to the next middleware
    const user = await userModel.findById(res.id);
    if (!user) return next(new Errorhandler(404, "User not found"));

    req.user = user;
    console.log(req.user);
    next();
  });
};
