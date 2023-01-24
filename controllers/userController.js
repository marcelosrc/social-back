const db = require("../config/database");

const createUser = async (req, res) => {
  res.status(200).send({message: "opa"});
};

module.exports = {
  createUser,
};
