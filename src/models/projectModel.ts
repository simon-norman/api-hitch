import mongoose = require('mongoose');

const { Schema } = mongoose;

interface Project {

}

const ProjectSchema = new Schema({
  name: { type: String, required: true },
});

const Project = mongoose.model<mongoose.Document>('project', ProjectSchema);

export default Project;
