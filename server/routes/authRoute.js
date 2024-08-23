const express = require("express");
const controller = require("./../Controller/userController");
const router = express.Router();

router.route("/api/user/register").post(controller.register);

router.route("/api/user/login").post(controller.login);



module.exports = router;
