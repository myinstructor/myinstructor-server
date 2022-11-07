import { Router } from "express";
import {
  deleteBooking,
  getAllBookings,
  getSingleBooking,
  updateBooking,
} from "../controllers/Admin/admin_bookings.js";
import {
  createAdmin,
  loginAdmin,
} from "../controllers/Admin/admin_controller.js";
import {
  deleteInstructor,
  getAllInstructors,
  getSingleInstructor,
  updateInstructor,
} from "../controllers/Admin/admin_instructor.js";
import {
  deleteUser,
  getAllUsers,
  getSingleUser,
  updateUser,
} from "../controllers/Admin/admin_user.js";
import { verifyAdmin } from "../middlewares/verify_user.js";

const router = Router();

router.route("/register").post(createAdmin);
router.route("/login").post(loginAdmin);
router.route("/all-users").get(verifyAdmin, getAllUsers);
router.route("/all-instructors").get(verifyAdmin, getAllInstructors);
router.route("/all-bookings").get(verifyAdmin, getAllBookings);
router
  .route("/user/:id")
  .get(verifyAdmin, getSingleUser)
  .put(verifyAdmin, updateUser)
  .delete(verifyAdmin, deleteUser);
router
  .route("/instructor/:id")
  .get(verifyAdmin, getSingleInstructor)
  .put(verifyAdmin, updateInstructor)
  .delete(verifyAdmin, deleteInstructor);
router
  .route("/booking/:id")
  .get(verifyAdmin, getSingleBooking)
  .put(verifyAdmin, updateBooking)
  .delete(verifyAdmin, deleteBooking);
export default router;
