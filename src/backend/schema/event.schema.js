const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  images: [
    {
      link: { type: String, },
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
  description: [
    {
      heading: { type: String, required: true },
      content: { type: String, required: true },
    },
  ],
  participants: { type: Number }, // Future-proof for referencing another collection
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Event", eventSchema);
