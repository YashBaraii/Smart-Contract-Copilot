import express from "express";
import { MoveCode } from "../models/MoveCode.js";

const router = express.Router();

router.post("/save", async (req, res) => {
  try {
    const { userId, code } = req.body;

    if (!userId || !code) {
      return res.status(400).json({ message: "User ID and Move code are required" });
    }

    const newCode = new MoveCode({ userId, code });
    await newCode.save();

    res.status(201).json({ message: "Move code saved successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error saving Move code", error });
  }
});

export default router;
