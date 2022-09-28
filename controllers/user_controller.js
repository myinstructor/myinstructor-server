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
    return next(new Errorhandler(400, "Please Fill Out All The Field"));
  const user = await userModel.findOne({ email }).select("+password");

  const validPass = await user.passwordComparison(password);
  if (validPass) return sendJwtToken(res, next, user);

  res.status(403).json({
    success: false,
    message: "You Entered Wrong Credentials",
  });
});

export const forgetPassword = catchAsyncError(async (req, res, next) => {
  const { email } = req.body;

  const user = await userModel.findOne({ email });
  if (!user) next(new Errorhandler(404, "No User Found With This Email"));
  await user.resetPasswordRequest();

  user.save();

  res.status(200).json({
    success: true,
    message: "Please Check Your Email",
  });
});

export const resetPassword = catchAsyncError(async (req, res, next) => {
  const { token, id, newPassword } = req.body;
  if (!token || !id || !newPassword)
    next(new Errorhandler(404, `Token or Id Not Found`));

  const user = await userModel
    .findById(id)
    .select("+resetPasswordToken")
    .select("+resetPasswordTime");

  // matching the token
  if (Date.now() > user.resetPasswordTime) {
    return next(new Errorhandler(500, `Token Time Out`));
  }

  if (token !== user.resetPasswordToken)
    return next(new Errorhandler(403, `Token Is Not Valid`));

  user.password = newPassword;
  await user.save();

  res.status(200).json({
    success: true,
  });
});
