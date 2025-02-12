import mongoose from "mongoose";

const urlSchema = mongoose.Schema(
  {
    longUrl: {
      type: String,
      required: true,
    },
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    clicks: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Url = mongoose.model("urls", urlSchema);

export default Url;
