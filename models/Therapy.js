import mongoose from "mongoose";
// import dateFormat from "../validators/dateFormat";
const TherapySchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, //owner
    doingQuestion: {
      type: String,
    },
    feelingQuestion: {
      type: String,
    },
    nextQuestion: {
      type: String,
    },
    feelingRating: {
      type: String,
    },
    helpfulRating: {
      type: String,
    },
    notes: {
      type: String,
    },
  },
  { timestamps: true }
);
mongoose.models = {};
const TherapyModel = mongoose.model("Therapy", TherapySchema);

export default TherapyModel;
