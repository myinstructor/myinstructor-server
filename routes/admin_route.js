import { Router } from "express";
import { createAdmin, loginAdmin } from "../controllers/admin_controller.js";

const router = Router();

router.route("/register").post(createAdmin);
router.route("/login").post(loginAdmin);

export default router;
