import express = require('express');

const createProjectRoutes = (projectController): any => {
  const router = express.Router();

  router.post('/project', projectController.saveProject);

  return router;
};

export default createProjectRoutes;
