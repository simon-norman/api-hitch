import mongoose = require('mongoose');

const { Schema } = mongoose;

const ProjectSchema = new Schema({
  name: { type: String, required: true },
});

const Project = mongoose.model('project', ProjectSchema);

export default Project;
