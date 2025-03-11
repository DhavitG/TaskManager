const { Schema, default: mongoose } = require("mongoose");

const TaskSchema = new Schema({
  name: {
    type: String,
    required: [true, "must provide value"],
    trim: true,
    maxlength: [20, "name cannot exceed 20 characters"],
  },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model("Task", TaskSchema);
