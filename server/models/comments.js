const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    id: mongoose.Types.ObjectId(),
    username: String,
    date: Date.now
})

module.exports = Comments = mongoose.model('Comment',CommentSchema);