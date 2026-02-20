const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema(
  {
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "posts",
      required: [true, "post is required"]
    },
    user: {
      type: String,   // removed quotes
      required: [true, "username is required"]
    }
  },
  {
    timestamps: true
  }
);

likeSchema.index({ post: 1, user: 1 }, { unique: true });

module.exports = mongoose.model("likes", likeSchema);