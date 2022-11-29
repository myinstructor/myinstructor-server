import { Router } from "express";
import { editSuburb } from "../controllers/suburb_controller.js";

const router = Router();

router.route("/edit-suburb/:id").post(editSuburb);

export default router;
