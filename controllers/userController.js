const User = require("../models/userSchema");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  if (
    req.body.email &&
    req.body.username &&
    req.body.password &&
    req.body.dob
  ) {
    req.body.username = req.body.username.toLowerCase();
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    await User.create(req.body, (err, cb) => {
      !err ? res.status(200).send(cb) : res.status(500).send(err);
    });
  } else {
    res.status(500).send({ message: "Um ou mais campos obrigatórios vazios" });
  }
};

module.exports = {
  createUser,
};
