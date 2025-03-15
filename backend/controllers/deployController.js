import fs from "fs";
import { exec } from "child_process";
import { MoveCode } from "../models/MoveCode.js";

export const deployMoveCode = async (req, res) => {
  try {
    const { userId } = req.body;

    const moveCodeEntry = await MoveCode.findOne({ userId }).sort({ createdAt: -1 });

    if (!moveCodeEntry) {
      return res.status(404).json({ message: "Move code not found" });
    }

    const moveFilePath = `./contracts/generated_${userId}.move`;
    fs.writeFileSync(moveFilePath, moveCodeEntry.code);

    exec(`aptos move publish --package-dir ${moveFilePath}`, (error, stdout, stderr) => {
      if (error) {
        return res.status(500).json({ message: "Deployment failed", error: stderr });
      }
      res.status(200).json({ message: "Deployment successful", output: stdout });
    });

  } catch (error) {
    res.status(500).json({ message: "Error deploying Move code", error });
  }
};
