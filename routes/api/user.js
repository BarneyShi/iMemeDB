const router = require("express").Router();
const jwt = require("jsonwebtoken");
const brcypt = require("bcryptjs");
const bodyparser = require("body-parser");
const User = require("../../models/users");
const auth = require("express-jwt");
require("dotenv").config();

//body-parser options
router.use(bodyparser.json());
router.use(
  bodyparser.urlencoded({
    extended: true,
  })
);

//@ POST /user/register
//@ Private

router.post("/register", (req, res) => {
  if (!req.body.username || !req.body.email || !req.body.password) {
    res.sendStatus(400);
  }
  User.findOne({ email: req.body.email }, (err, result) => {
    if (err) throw err;
    if (!result) {
      const newuser = new User({
        username: req.body.username,
        email: req.body.email,
        password: brcypt.hashSync(req.body.password, 10),
      });
      newuser.save().then((user) => res.status(200).send(user));
    } else {
      return res.status(400).send({ message: "Email already exists" });
    }
  });
});

//@ POST /user/login
//@ Public

router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, result) => {
    if (err) throw err;
    if (!result) return res.status(400).send({ Error: "Email doesn't exist" });
    if (!brcypt.compareSync(req.body.password, result.password)) {
      res.status(401).send({ Erros: "Incorrect password" });
    } else {
      User.findOne({ email: req.body.email }, (err, result) => {
        //  payload = {
        //   email: req.body.email,
        //   username: result.username
        // }
        // console.log(username)
        // console.log("123" + username);
        const payload = { email: req.body.email, username: result.username };
        jwt.sign(
          payload,
          process.env.ACCESS_TOKEN,
          { expiresIn: 900 },
          (err, token) => {
            if (err) throw err;
            res
              .status(200)
              .send({ Message: "Successfully logged in", username: result.username, token: token });
          }
        );
      });
    }
  });
});

//@ GET /user/protected
//@ Private
router.get(
  "/checkauth",
  auth({ secret: process.env.ACCESS_TOKEN }),
  (req, res) => {
    //USe req.user to DECODE TOKEN
    res.status(200).send({ Message: "Logged In", Data: req.user });
    console.log(req.user);
  }
);

module.exports = router;
