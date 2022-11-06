import { Router } from "express";
import { createAdmin, loginAdmin } from "../controllers/admin_controller.js";
import { sendWelcomeEmail } from "../controllers/email_controller.js";

const router = Router();

router.route("/register").post(createAdmin);
router.route("/login").post(loginAdmin);
router.route("/send-email").post(sendWelcomeEmail);
export default router;
