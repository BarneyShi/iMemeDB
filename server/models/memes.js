const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MemeSchema = new Schema({
  id: mongoose.Types.ObjectId,
  name:String,
  image: String,
  description: String,
  date: {
    type: Date,
    default: Date.now(),
  },
  author: {
    id: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    username: String,
  },
  quality: {
    rates: Number,
    rater_total: Number,
  },
  comments: {
    type: mongoose.Types.ObjectId,
    ref: "Comments",
  },
});

module.exports = mongoose.model("Meme", MemeSchema);
