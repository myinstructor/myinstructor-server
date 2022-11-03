import { Router } from "express";
import {
  addInstructor,
  editInstructor,
  forgotInstructorPassword,
  getAllsuburbs,
  loginInstructor,
  postRating,
  resetPasswordInstructor,
  searchInstructor,
  searchsuburbs,
  singleInstructor,
  updateInstructorAvater,
} from "../controllers/instructor_controller.js";
import { verifyInstructor, verifyUser } from "../middlewares/verify_user.js";
import { multerProcess } from "../utils/multer.js";

const router = Router();

router
  .route("/add-instructor")
  .post(multerProcess.single("avater"), addInstructor);
router.route("/login-instructor").post(loginInstructor);
router.route("/edit-instructor").put(verifyInstructor, editInstructor);
router
  .route("/instructor/update-avater")
  .put(
    verifyInstructor,
    multerProcess.single("avater"),
    updateInstructorAvater
  );
router.route("/instructor/:id").get(singleInstructor);
router
  .route("/search-instructor/:postCode/:transmission")
  .get(searchInstructor);
router.route("/suburbs").get(getAllsuburbs);
router.route("/search-suburbs/:keyword").get(searchsuburbs);
router.route("/forgot-password/instructor").post(forgotInstructorPassword);
router.route("/reset-password/instructor").post(resetPasswordInstructor);

// review
router.route("/instructor/review").post(verifyUser, postRating);

export default router;
