const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  images: [
    {
      link: { type: String, required: true },
      alt: { type: String, required: true },
    },
  ],
  name: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  duration: {
    start: { type: Date, required: true },
    end: { type: Date, required: true },
  },
  mode: {
    type: String,
    enum: ["online", "offline", "mixed"],
    required: true,
  },
  onlineLink: { type: String },
  simpleDescription: { type: String, required: true },
  description: [{ type: Object, required: true }], // Replace with a proper description schema if needed
  participants: { type: String }, // Future-proof for referencing another collection
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Event", eventSchema);
