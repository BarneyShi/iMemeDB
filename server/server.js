const express = require('express');
const mongoose = require('mongoose');
const app = express();

//Connect app to Mongo Atlas
mongoose.connect("mongodb+srv://Zhuangzhuang:sz19950221@zhuangzhuang-nhqti.mongodb.net/test?retryWrites=true&w=majority", {
	useNewUrlParser: true,
	useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(function(){
	console.log("Connected to database in MongoDB atlas!");
}).catch(function(err){
	console.log("ERROR", err.message);
});






const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listeing to ${PORT}`));