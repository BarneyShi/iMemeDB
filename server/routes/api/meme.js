const express = require('express');
const multer = require('multer')
const formDataHandler = multer();
const bodyparser = require('body-parser')
const router = express.Router();
const NewMeme = require('../../models/memes');


//body-parser options
router.use(bodyparser.json());
router.use(bodyparser.urlencoded({
	extended:true
}))

//@route POST /memes
//@access public

router.post('/', formDataHandler.none(), (req,res)=>{
    const newmeme = new NewMeme({
        name: req.body.name,
        image: req.body.image,
        description: req.body.description
    });
    newmeme.save().then(item=>{
        res.json(item)
    })
})

//@route GET /memes
//@access public
router.get('/', (req,res)=>{
    NewMeme.find({},(err,result)=>{
        if(err) console.log(err);
        res.send(result)
        return result;
    })
})

module.exports = router;