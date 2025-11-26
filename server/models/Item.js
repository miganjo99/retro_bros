import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  type: { type: String, enum: ["console", "game"], required: true },
  name: { type: String, required: true },
  year: { type: Number },
  manufacturer: { type: String },
  genre: { type: String },
  console: { type: String },
  platforms: [{ type: String }],
  image: { type: String }
}, { timestamps: true });

export default mongoose.model("Item", itemSchema);
