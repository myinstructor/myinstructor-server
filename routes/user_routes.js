import { Router } from "express";
import {
  loginUser,
  registerUser,
  forgetPassword,
  resetPassword,
  addCredit,
  getCurrentUser,
  editUser,
  updateProfilePic,
} from "../controllers/user_controller.js";
import { multerProcess } from "../utils/multer.js";
import { verifyUser } from "../middlewares/verify_user.js";
const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/me").get(verifyUser, getCurrentUser);
router.route("/edit-user").put(verifyUser, editUser);
router
  .route("/update-avater")
  .put(verifyUser, multerProcess.single("avater"), updateProfilePic);
router.route("/forgot-password").post(forgetPassword);
router.route("/reset-password").post(resetPassword);
router.route("/add-credit").post(verifyUser, addCredit);
export default router;
