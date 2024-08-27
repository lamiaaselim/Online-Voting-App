const VoteSchema = require("./../Model/voteModel");
const TopicSchema = require("./../Model/topicModel");


exports.addVote = async (req, res, next) => {
  try {
    const { nationalId, topicId, selectedOption } = req.body;

    // check if previous vote is already in the database
    const existingVote = await VoteSchema.findOne({ nationalId, topicId });
    if (existingVote) {
      return res
        .status(400)
        .json({ error: "You have already voted on this topic" });
    }

    // verify that topic exists and active
    const topic = await TopicSchema.findById(topicId);
    if (
      !topic ||
      topic.isCancelled ||
      new Date(topic.startDate) > new Date() ||
      new Date(topic.endDate) < new Date()
    ) {
      return res
        .status(400)
        .json({ error: "Topic is not active or does not exist" });
    }

    // add Vote
    const vote = new VoteSchema({ nationalId, topicId, selectedOption });
    await vote.save();

    // Update vote in Topic
    const option = topic.options.find((opt) => opt.option === selectedOption);
    if (option) {
      option.votes += 1;
      await topic.save();
    }

    res.status(201).json({ message: "Vote recorded successfully" });
  } catch (error) {
    next(error);
  }
};
