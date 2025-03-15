import mongoose from "mongoose";

const MoveCodeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  code: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export const MoveCode = mongoose.model("MoveCode", MoveCodeSchema);
