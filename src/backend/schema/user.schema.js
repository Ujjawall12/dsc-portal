const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
<<<<<<< HEAD
=======
  name: {
    type: String,
    required: true,
  },
>>>>>>> 0f9b50b0fc6bae0cd54ce320c3d71d09ffb65af7
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
<<<<<<< HEAD
=======
    match: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
>>>>>>> 0f9b50b0fc6bae0cd54ce320c3d71d09ffb65af7
  },
  email: {
    type: String,
    required: true,
    unique: true,
<<<<<<< HEAD
  },
=======
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

>>>>>>> 0f9b50b0fc6bae0cd54ce320c3d71d09ffb65af7
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
