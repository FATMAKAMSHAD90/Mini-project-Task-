const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  organizer: { type: String, minLength: 20, required: true, unique: true },
  name: { type: String, enum: "event" },
  email: { type: String, exists: true },
  image: { type: String, required: true },
  numOfSeats: Number,
  bookedSeats: Number,
  startDate: Date,
  endDate: Date,
});
module.exports = mongoose.model("Product", ProductSchema);
