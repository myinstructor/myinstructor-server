import { Router } from "express";
import {
  addMessage,
  addNewConversation,
  createConversation,
  getConvoMessage,
} from "../controllers/conversation_controller.js";

const router = Router();

router.route("/create-conversation").post(createConversation);
router.route("/add-conversation").post(addNewConversation);
router.route("/add-message").post(addMessage);
router.route("/get-messages/:id").get(getConvoMessage);

export default router;
