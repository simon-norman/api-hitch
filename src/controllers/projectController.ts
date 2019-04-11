interface Project {
  create(any): Promise<object>;
}

export default class ProjectController {
  Project: Project;

  constructor(Project: Project) {
    this.Project = Project;
  }

  saveProject = async (ctx, next): Promise<void> => {
    try {
      const project = ctx.request.body;
      const savedProject = await this.Project.create(project);

      ctx.status = 200;
      ctx.body = savedProject;
      await next();
    } catch (error) {
      if (error.name === 'ValidationError') {
        ctx.throw(422, error.message);
      } else {
        ctx.throw(error);
      }
    }
  }
}
