import express = require('express');
import bodyParser = require('body-parser');
import cors = require('cors');
import Project from './models/projectModel';
import ProjectController from './controllers/projectController';
import createProjectRoutes from './routes/projectRoutes';

const createHitchApi = (): any => {
  const projectController = new ProjectController(Project);
  const projectRoutes = createProjectRoutes(projectController);

  const hitchApi = express();

  hitchApi.use(cors());

  hitchApi.use(bodyParser.json({ limit: '50mb' }));
  hitchApi.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

  hitchApi.use('/', projectRoutes);

  hitchApi.listen('4000');

  return hitchApi;
};

export default createHitchApi;
