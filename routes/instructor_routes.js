import { Router } from "express";
import {
  addInstructor,
  getAllsuburbs,
  loginInstructor,
  searchInstructor,
  searchsuburbs,
  singleInstructor,
} from "../controllers/instructor_controller.js";
import { upload } from "../utils/multer.js";

const router = Router();

router.route("/add-instructor").post(upload.single("avater"), addInstructor);
router.route("/login-instructor").post(loginInstructor);
router.route("/instructor/:id").get(singleInstructor);
router
  .route("/search-instructor/:postCode/:transmission")
  .get(searchInstructor);
router.route("/suburbs").get(getAllsuburbs);
router.route("/search-suburbs/:keyword").get(searchsuburbs);

export default router;
