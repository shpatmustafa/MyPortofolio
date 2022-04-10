const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Project Name is required!"],
  },
  image: [
    {
      name: String,
      order: Number,
    },
  ],
  description: {
    type: String,
    required: [true, "Description is required!"],
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
