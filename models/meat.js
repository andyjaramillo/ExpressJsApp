const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MeatSchema = new Schema({
  name: { type: String, required: true },
  summary: { type: String, required: true },
  price: { type: Number, required: true },
  listed: { type: Date, default: Date.now },
});

// Virtual for book's URL
MeatSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/meats`;
});

// Export model
module.exports = mongoose.model("Meat", MeatSchema);