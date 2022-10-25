import { Router } from "express";
import {
  changeBookingStatus,
  findBooking,
  makeBooking,
} from "../controllers/booking_controller.js";
import { verifyUser } from "../middlewares/verify_user.js";

const router = Router();

router.route("/add-booking").post(verifyUser, makeBooking);
router.route("/find-booking/:id").get(verifyUser, findBooking);
router.route("/booking/change-status/:id").put(verifyUser, changeBookingStatus);

export default router;
