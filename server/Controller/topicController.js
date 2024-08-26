const TopicSchema = require("./../Model/topicModel");

exports.addTopic = async (req, res) => {
  try {
    const newTopic = new TopicSchema(req.body);
    await newTopic.save();
    res.status(201).json({ message: "added successfully", newTopic });
  } catch (error) {
    next(error);
  }
};

exports.getAllTopics = async (req, res) => {
  try {
    const topics = await TopicSchema.find({ isCancelled: false }).sort({
      startDate: -1,
    });
    res.json(topics);
  } catch (error) {
    next(error);
  }
};

exports.updateTopic = async (req, res) => {
  try {
    const topic = await TopicSchema.findById(req.params.id);
    if (!topic) return res.status(404).json({ error: "Topic not found" });

    if (
      req.body.action === "postpone" &&
      new Date(topic.startDate) > new Date()
    ) {
      topic.startDate = req.body.newStartDate;
    } else if (
      req.body.action === "extend" &&
      new Date(topic.endDate) > new Date()
    ) {
      topic.endDate = req.body.newEndDate;
    } else if (
      req.body.action === "cancel" &&
      new Date(topic.startDate) >= new Date()
    ) {
      topic.isCancelled = true;
    }

    await topic.save();
    res.json({ message: "updated", topic });
  } catch (error) {
    next(error);
  }
};

exports.getTopicById = async (req, res, next) => {
  try {
    const topic = await TopicSchema.findById(req.params.id);

    if (!topic) {
      return res.status(404).json({ error: "Topic not found" });
    }

    res.json(topic);
  } catch (error) {
    next(error);
  }
};

// Show Voting Results for the specified topic
exports.getResults = async (req, res) => {
  try {
    const topic = await TopicSchema.findById(req.params.id);

    if (!topic || topic.isCancelled) {
      return res.status(404).json({ error: "Topic not found or cancelled" });
    }

    res.json({
      statement: topic.statement,
      options: topic.options,
      totalVotes: topic.options.reduce((acc, option) => acc + option.votes, 0),
    });
  } catch (error) {
    next(error);
  }
};

// Reports for topics that are expired recently
exports.getRecentTopicsReport = async (req, res, next) => {
  try {
    const recentTopics = await TopicSchema.find({
      endDate: { $gt: new Date(new Date().setDate(new Date().getDate() - 7)) },
      isCancelled: false,
    });

    res.json(recentTopics);
  } catch (error) {
   next(error);
  }
};

