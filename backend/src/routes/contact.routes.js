import { Router } from "express";
import { handleContact } from "../controllers/contact.controller.js";

const router = Router();

router.post("/", handleContact);

export default router;
