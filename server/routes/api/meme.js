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
        description: req.body.description,
        upvotes: 0,
        downvotes: 0
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

//@route POST/memes/:id/upvpte
//@access public
router.post('/:id/upvote',(req,res)=>{
    NewMeme.findByIdAndUpdate(req.params.id, {$inc :{upvotes: 1}} ,(err,result)=>{
        if(err) throw err;
        res.send(result.upvotes.toString())
    })
})
//@route POST /memes/:id/downvote
//@access public
router.post('/:id/downvote',(req,res)=>{
    NewMeme.findByIdAndUpdate(req.params.id, {$inc :{downvotes: 1}} ,(err,result)=>{
        if(err) throw err;
        res.send(result.downvotes.toString())
    })
})


module.exports = router;