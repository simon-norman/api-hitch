import mongoose = require('mongoose');

const { Schema } = mongoose;

interface Project {
  name: string;
}

const ProjectSchema = new Schema({
  name: { type: String, required: true },
});

const Project = mongoose.model<Project & mongoose.Document>('project', ProjectSchema);

export default Project;
