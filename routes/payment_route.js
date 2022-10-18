import { Router } from "express";
import { createPaymentIndent } from "../controllers/payment_controller.js";

const router = Router();

router.route("/payment-indent").post(createPaymentIndent);

export default router;
