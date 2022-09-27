import { Router } from "express";
import {
  loginUser,
  registerUser,
  forgetPassword,
  resetPassword,
} from "../controllers/user_controller.js";
const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/forget-password").post(forgetPassword);
router.route("/reset-password").post(resetPassword);

export default router;
