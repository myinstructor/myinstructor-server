import { Router } from "express";
import {
  addInstructor,
  loginInstructor,
  searchInstructor,
  singleInstructor,
} from "../controllers/instructor_controller.js";
import { upload } from "../utils/multer.js";

const router = Router();

router.route("/add-instructor").post(upload.single("avater"), addInstructor);
router.route("/login-instructor").post(loginInstructor);
router.route("/instructor/:id").get(singleInstructor);
router.route("/search-instructor/:postCode").get(searchInstructor);

export default router;
