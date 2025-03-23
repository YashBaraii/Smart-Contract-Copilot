import express from "express";
import { MoveCode } from "../models/MoveCode.js";

const router = express.Router();

router.post("/save", async (req, res) => {
  try {
      console.log("Request Body:", req.body);
      const { userId, code } = req.body;

      if (!userId || !code) {
          return res.status(400).json({ message: "User ID and Move code are required" });
      }

      const existingCode = await MoveCode.findOne({ userId });

      if (existingCode) {
          existingCode.code = code;
          await existingCode.save();
          return res.status(200).json({ message: "Move code updated successfully" });
      }

      const newCode = new MoveCode({ userId, code });
      await newCode.save();

      res.status(201).json({ message: "Move code saved successfully" });
  } catch (error) {
      console.error("Error saving Move code:", error);
      res.status(500).json({ message: "Error saving Move code", error: error.message });
  }
});

router.get("/:userId", async (req, res) => {
  try {
      const { userId } = req.params;
      if (!userId) {
          return res.status(400).json({ message: "User ID is required" });
      }

      const moveCodes = await MoveCode.find({ userId }).sort({ createdAt: -1 });
      res.status(200).json(moveCodes);
  } catch (error) {
      console.error("Error fetching Move codes:", error);
      res.status(500).json({ message: "Error fetching Move codes", error: error.message });
  }
});


export default router;
