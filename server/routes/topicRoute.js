const express = require("express");
const controller = require("./../Controller/topicController");
const router = express.Router();
const { protect, admin } = require("./../Middelwares/authenticateMW");

router
  .route("/api/topic")
  .get(controller.getAllTopics)
  .post(protect, admin, controller.addTopic);

router
  .route("/api/topic/:id")
  .put(protect, admin, controller.updateTopic)
  .get(protect, controller.getTopicById);

router.route("/api/topics/result/:id").get(protect, controller.getResults);
router.route("/api/topic/report/recent").get(controller.getRecentTopicsReport);

module.exports = router;
