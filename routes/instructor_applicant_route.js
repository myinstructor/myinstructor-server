import { Router } from "express";
import { applyInstructor } from "../controllers/instructor_applicant_controller.js";
const router = Router();

router.route("/apply-instructor").post(applyInstructor);

export default router;
