import Koa = require('koa');
import koaCors = require('koa-cors');
import mongoose = require('mongoose');
import Project from './models/projectModel';
import ProjectController from './controllers/projectController';
import createProjectRouter from './routes/projectRoutes';


const connectToDatabase = async (): Promise<void> => {
  await mongoose.connect('mongodb://localhost:27017/hitch-test-db', { useNewUrlParser: true });
};


const createServer = (): any => {
  const projectController = new ProjectController(Project);
  const projectRoutes = createProjectRouter(projectController).routes();

  const server = new Koa();
  server.use(koaCors());
  server.use(projectRoutes());
  server.listen('4000');

  return server;
};

const createHitchApi = async (): Promise<void> => {
  await connectToDatabase();

  return createServer();
};

export default createHitchApi;
