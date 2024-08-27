const mongoose = require("mongoose");

const OptionSchema = new mongoose.Schema({
  option: String,
  votes: { type: Number, default: 0},
});

const TopicSchema = new mongoose.Schema({
  statement: { type: String, required: true },
  options: [OptionSchema],
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  isCancelled: { type: Boolean, default: false },
});

module.exports = mongoose.model("Topic", TopicSchema);
