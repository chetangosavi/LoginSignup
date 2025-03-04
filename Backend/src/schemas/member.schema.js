import mongoose from "mongoose";

const MemberSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "user", immutable: true },
  },
  { timestamps: true }
);

export const Member = mongoose.model("User", MemberSchema);