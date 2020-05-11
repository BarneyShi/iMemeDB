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
    // id: {
    //   type: mongoose.Types.ObjectId,
    //   ref: "User",
    // },
    type: String,
    ref: 'User'
  },
  upvotes: Number,
  downvotes: Number,
  comments: {
    type: mongoose.Types.ObjectId,
    ref: "Comments",
  },
  upvoted_users : {
    type: Array
  },
  downvoted_users: {
    type: Array
  }
},{
  versionKey: false
});

module.exports = mongoose.model("Meme", MemeSchema);
