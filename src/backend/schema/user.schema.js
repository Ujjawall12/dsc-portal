const mongoose = require("mongoose");
const UserHistory = require("./UserHistorySchema");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
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
    permissions: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Permissions",
    },
    history: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserHistory",
      },
    ],
  },
  {
    timestamps: true,
  },
);

UserSchema.pre("findOneAndUpdate", async function (next) {
  const userId = this.getQuery()._id;
  await checkPermission(userId, "update", "users", next);

  const update = this.getUpdate();
  const user = await this.model.findOne(this.getQuery());

  const history = new UserHistory({
    userId: user._id,
    updatedField: Object.keys(update)[0],
    oldValue: user[Object.keys(update)[0]],
    newValue: update[Object.keys(update)[0]],
  });
  await history.save();
  next();
});

module.exports = mongoose.model("User", UserSchema);
