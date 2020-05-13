const express = require("express");
const multer = require("multer");
const formDataHandler = multer();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const router = express.Router();
const NewMeme = require("../../models/memes");
const NewUser = require("../../models/users");
//CHECK AUTH
const auth = require("express-jwt");
require("dotenv").config();

//body-parser options
router.use(bodyparser.json());
router.use(
  bodyparser.urlencoded({
    extended: true,
  })
);

//@route POST /memes
//@access public

router.post(
  "/",
  auth({ secret: process.env.ACCESS_TOKEN }),
  formDataHandler.none(),
  (req, res) => {
    const newmeme = new NewMeme({
      name: req.body.name,
      image: req.body.image,
      description: req.body.description,
      upvotes: 0,
      downvotes: 0,
      author: req.user.username,
      comments: { comment: {} },
    });
    newmeme.save().then((item) => {
      res.json(item);
    });
  }
);

//@route GET /memes
//@access public
router.get("/", (req, res) => {
  NewMeme.find({}, (err, result) => {
    if (err) console.log(err);
    res.send(result);
    return result;
  });
});

//@route POST/memes/:id/upvpte
//@access public
router.post(
  "/:id/upvote",
  auth({ secret: process.env.ACCESS_TOKEN }),
  (req, res) => {
    NewUser.findOne({ username: req.user.username }, (err, result) => {
      if (err) throw err;
      if (result.downvoted_memes.includes(req.params.id)) return;
      if (result.upvoted_memes.includes(req.params.id)) {
        NewMeme.findByIdAndUpdate(
          req.params.id,
          {
            $inc: { upvotes: -1 },
            $pull: { upvoted_users: req.user.username },
          },
          (err, result) => {
            if (err) throw err;
            // res.send(result.upvotes.toString())
            res.send("Success upvoted");
          }
        );
        result.upvoted_memes.pull(req.params.id);
        result.save().then((updated) => {});
      } else {
        NewMeme.findByIdAndUpdate(
          req.params.id,
          { $inc: { upvotes: 1 }, $push: { upvoted_users: req.user.username } },
          (err, result) => {
            if (err) throw err;
            // res.send(result.upvotes.toString())
            res.send("Success upvoted");
          }
        );
        result.upvoted_memes.push(req.params.id);
        result.save().then((updated) => {});
      }
    });
  }
);
//@route POST /memes/:id/downvote
//@access public
router.post(
  "/:id/downvote",
  auth({ secret: process.env.ACCESS_TOKEN }),
  (req, res) => {
    NewUser.findOne({ username: req.user.username }, (err, result) => {
      if (err) throw err;
      if (result.upvoted_memes.includes(req.params.id)) return;
      if (result.downvoted_memes.includes(req.params.id)) {
        NewMeme.findByIdAndUpdate(
          req.params.id,
          {
            $inc: { downvotes: -1 },
            $pull: { downvoted_users: req.user.username },
          },
          (err, result) => {
            if (err) throw err;
            res.send("Meme downvoted");
          }
        );
        result.downvoted_memes.pull(req.params.id);
        result.save().then((updated) => {});
      } else {
        NewMeme.findByIdAndUpdate(
          req.params.id,
          {
            $inc: { downvotes: 1 },
            $push: { downvoted_users: req.user.username },
          },
          (err, result) => {
            if (err) throw err;
            res.send("Meme downvoted");
          }
        );
        result.downvoted_memes.push(req.params.id);
        result.save().then((updated) => {});
      }
    });
  }
);

//route @POST /meme/:id
//access Private
router.post(
  "/:id/comments",
  auth({ secret: process.env.ACCESS_TOKEN }),
  (req, res) => {
    NewMeme.findByIdAndUpdate(
      { _id: mongoose.Types.ObjectId(req.params.id) },
      {
        $push: {
          comments: { id:mongoose.Types.ObjectId, content: req.body.comment, commenter: req.user.username, date: new Date().toISOString() },
        },
      },
      (err, result) => {
        if (err) throw err;
        result.save().then(() => {
          res.send("New commnent added");
        });
      }
    );
  }
);

module.exports = router;
