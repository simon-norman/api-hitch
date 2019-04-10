import KoaRouter = require('koa-router');

const createProjectRoutes = (projectController): any => {
  const router = new KoaRouter();

  router.post('/project', projectController.saveProject);

  return router;
};

export default createProjectRoutes;
