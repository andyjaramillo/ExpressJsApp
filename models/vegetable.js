const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const VegetableSchema = new Schema({
  name: { type: String, required: true },
  summary: { type: String, required: true },
  price: { type: Number, required: true },
  listed: { type: Date, default: Date.now },
});

// Virtual for bookinstance's URL
VegetableSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/vegetables`;
});

// Export model
module.exports = mongoose.model("Vegetable", VegetableSchema);