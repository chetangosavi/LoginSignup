import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    projectName: { type: String, required: true, trim: true },
    projectDescription: { type: String, trim: true },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    status: {
      type: String,
      enum: ["Pending", "In Progress", "Completed", "On Hold"],
      default: "Pending",
    },
    createdAt: { type: Date, required: true },
  },
  { timestamps: true }
);

export const Project = mongoose.model("project", ProjectSchema);
