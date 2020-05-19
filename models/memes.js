const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MemeSchema = new Schema(
  {
    id: mongoose.Types.ObjectId,
    name: String,
    image: String,
    description: String,
    date: {
      type: Date,
      default: Date.now(),
    },
    author: {
      type: String,
    },
    upvotes: Number,
    downvotes: Number,
    comments: {
      type: Array,
      _id: Schema.Types.ObjectId,
      content: String,
      commenter: String,
      date: String
    },
    upvoted_users: {
      type: Array,
    },
    downvoted_users: {
      type: Array,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Meme", MemeSchema);
