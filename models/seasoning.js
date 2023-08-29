const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SeasoningSchema = new Schema({
  name: { type: String, required: true },
  summary: { type: String, required: true },
  price: { type: Number, required: true },
  size: {
    type: String,
    required: true,
    enum: ["small", "medium", "large"],
    default: "small",
  },
  listed: { type: Date, default: Date.now },
});

// Virtual for bookinstance's URL
SeasoningSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/seasonings`;
});

// Export model
module.exports = mongoose.model("Seasoning", SeasoningSchema);