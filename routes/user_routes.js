import { Router } from "express";
import {
  loginUser,
  registerUser,
  forgetPassword,
  resetPassword,
  addCredit,
  getCurrentUser,
} from "../controllers/user_controller.js";
import { verifyUser } from "../middlewares/verify_user.js";
const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/me").get(verifyUser, getCurrentUser);
router.route("/forget-password").post(forgetPassword);
router.route("/reset-password").post(resetPassword);
router.route("/add-credit").post(verifyUser, addCredit);
export default router;
