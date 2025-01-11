const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    match: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },

  branch: {
    type: String,
    enum: ["CSE", "ECE", "ME", "CE", "EE", "IPE", "CSE-DD", "ECE-DD"],
    required: true,
  },

  field: {
    type: String,
    enum: ["Web", "AR/VR", "App Dev", "AI/ML", "Cloud", "UI/UX"],
    required: true,
  },

  role: {
    type: String,
    enum: [
      "admin",
      "faculty",
      "teamLead",
      "subLead",
      "member",
      "participant",
      "oldMember",
    ],
    default: "participant",
  },
});

module.exports = mongoose.model("User", UserSchema);
