import { Router } from "express";
import {
  applyInstructor,
  getAppliedInstructors,
} from "../controllers/instructor_applicant_controller.js";
import { verifyAdmin } from "../middlewares/verify_user.js";
const router = Router();

router.route("/apply-instructor").post(applyInstructor);

export default router;
