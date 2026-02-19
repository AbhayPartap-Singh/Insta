const mongoose = require("mongoose");

const followSchema = new mongoose.Schema(
  {
    follower: {
      type: String
      // better:
      // type: mongoose.Schema.Types.ObjectId,
      // ref: "users",
      // required: true
    },
    following: {
      type: String
    },
    status: {   // also changed Status → status (best practice lowercase)
      type: String,
      default: "pending",
      enum: {
        values: ["pending", "accepted", "rejected"],
        message: "status can only be pending, accepted or rejected"
      }
    }
  },
  {
    timestamps: true
  }
);

followSchema.index({ follower: 1, following: 1 }, { unique: true });

module.exports = mongoose.model("follows", followSchema);
