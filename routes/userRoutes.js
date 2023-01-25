const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "storage/tmp/" });

const userController = require("../controllers/userController");

const router = express.Router();

router.post("/users/create", userController.createUser);

module.exports = router;
