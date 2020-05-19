const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    email: String,
    password: String,
    upvoted_memes: Array,
    downvoted_memes: Array
},{
    versionKey:false
})

module.exports = User = mongoose.model('User',UserSchema);