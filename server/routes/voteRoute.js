const express = require("express");
const controller = require("./../Controller/voteController");
const router = express.Router();
const { protect } = require("./../Middelwares/authenticateMW");

router.route("/api/vote").post(protect, controller.addVote);

module.exports = router;
