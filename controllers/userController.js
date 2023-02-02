const User = require("../models/userSchema");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  if (
    req.body.username &&
    req.body.email &&
    req.body.dob &&
    req.body.gender &&
    req.body.password &&
    req.body.password === req.body.passwordConf
  ) {
    req.body.username = req.body.username.toLowerCase();
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    User.create(req.body, (err) => {
      !err
        ? res.status(200).send({ message: "OK" })
        : res.status(500).send({ message: "ERR" });
    });
  } else {
    res.status(500).send({ message: "ERR" });
  }
};

const checkUserExistence = async (req, res) => {
  User.findOne({ username: req.body.username }, (err, cb) => {
    !err && cb
      ? res.status(200).send({ message: "ERR" })
      : res.status(200).send({ message: "OK" });
  });
};

module.exports = {
  createUser,
  checkUserExistence,
};
