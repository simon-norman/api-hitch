import Koa = require('koa');
import koaCors = require('koa-cors');
import koaBodyParser = require('koa-bodyparser');
import mongoose = require('mongoose');
import Project from './models/projectModel';
import ProjectController from './controllers/projectController';
import createProjectRouter from './routes/projectRoutes';


const connectToDatabase = async (): Promise<void> => {
  await mongoose.connect('mongodb://localhost:27017/hitch-test-db', { useNewUrlParser: true });
};


const createServer = (): any => {
  const projectController = new ProjectController(Project);
  const projectRoutes = createProjectRouter(projectController);

  const server = new Koa();
  server.use(koaCors());
  server.use(koaBodyParser());
  server.use(projectRoutes.routes());

  return server.listen(3000);
};

const createHitchApi = async (): Promise<void> => {
  await connectToDatabase();

  return createServer();
};

export default createHitchApi;
