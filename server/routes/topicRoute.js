const express = require("express");
const controller = require("./../Controller/topicController");
const router = express.Router();

router
  .route("/api/topic")
  .get(controller.getAllTopics)
  .post(controller.addTopic);

router.route("/api/topic/:id").put(controller.updateTopic);

router.route("/api/topic/:id/result").get(controller.getResults);
router.route("/api/topic/report/recent").get(controller.getRecentTopicsReport);

module.exports = router;
