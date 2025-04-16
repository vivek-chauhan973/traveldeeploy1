import mongoose from "mongoose";

const HeaderScriptsSchema = new mongoose.Schema(
  {
    headertitle: {
      type: String,
      required: [true, "Header title is required"],
      trim: true,
    },
    headercode: {
      type: String,
      required: [true, "Header code is required"],
      trim: true,
    },
  },
  {
    timestamps: true, // Optional: adds createdAt and updatedAt fields
  }
);

// Prevent model overwrite on hot reloads in development
const HeaderScript = mongoose.models.HeaderScript || mongoose.model("HeaderScript", HeaderScriptsSchema);

export default HeaderScript;
