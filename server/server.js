const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();



//Connect app to Mongo Atlas
const db = require('./config/mongoURI').mongoURI
mongoose.connect(db, {
	useNewUrlParser: true,
	useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(function(){
	console.log("Connected to database in MongoDB atlas!");
}).catch(function(err){
	console.log("ERROR", err.message);
});

//COR SETUP
app.use(cors());

//use Routes
app.use('/memes', require('./routes/api/meme'))
app.use('/user', require('./routes/api/user'))

//AUTH error handling
app.use((err,req,res,next)=>{
	if(err.name === 'UnauthorizedError'){
		return res.status(401).send('Invalid token')
	}
	next()
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listeing to ${PORT}`));