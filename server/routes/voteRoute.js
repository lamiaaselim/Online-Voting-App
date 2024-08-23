const express = require("express");
const controller = require("./../Controller/voteController");
const router = express.Router();

router
  .route("/api/vote")
  //   .get(controller)
  .post(controller.addVote);

// router.route("/api/vote/:id").put(controller);
// .get(controller)
// .delete(controller)

module.exports = router;
