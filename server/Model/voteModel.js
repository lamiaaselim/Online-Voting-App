const mongoose = require("mongoose");

const VoteSchema = new mongoose.Schema({
  nationalId: { type: String, required: true },
  topicId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Topic",
    required: true,
  },
  selectedOption: { type: String, required: true },
});

module.exports = mongoose.model("Vote", VoteSchema);
