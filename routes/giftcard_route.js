import { Router } from "express";
import {
  createGiftcard,
  validateCoupon,
} from "../controllers/giftCardController.js";
import { verifyUser } from "../middlewares/verify_user.js";

const router = Router();

router.route("/create-giftcard").post(verifyUser, createGiftcard);
router.route("/validate-giftcard/:code").post(verifyUser, validateCoupon);

export default router;
