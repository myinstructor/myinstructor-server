import catchAsyncError from "../middlewares/catchAsyncError.js";
import Errorhandler from "../middlewares/handle_error.js";
import { sendJwtToken } from "../middlewares/sendJwtToken.js";
import { userModel } from "../models/user_model.js";

export const registerUser = catchAsyncError(async (req, res, next) => {
  if (!req.body) next(new Errorhandler(404, "Email Or Password Not Found"));

  // checking if the user exist
  const userExist = await userModel.findOne({ email: req.body?.email });
  if (userExist) next(new Errorhandler(500, "User Already Exist"));

  const user = await userModel.create(req.body);

  sendJwtToken(res, next, user);
});

export const loginUser = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    return next(new Errorhandler("Please Fill Out All Field", 400));
  const user = await userModel.findOne({ email }).select("+password");

  const validPass = await user.passwordComparison(password);
  if (validPass) return sendJwtToken(res, next, user);

  res.status(403).json({
    success: false,
    message: "You Entered Wrong Credentials",
  });
});
