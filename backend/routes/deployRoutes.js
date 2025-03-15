import express from "express";
import { deployMoveCode } from "../controllers/deployController.js";

const router = express.Router();

router.post("/deploy", deployMoveCode);

export default router;
