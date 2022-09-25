import catchAsyncError from "../middlewares/catchAsyncError.js";
import Errorhandler from "../middlewares/handle_error.js";

export const registerUser = catchAsyncError(async (req, res, next) => {
  if (!req.body?.email || !req.body?.password)
    throw new Errorhandler(404, "Email Or Password Not Found");

  res.status(200).json({
    success: true,
  });
});
