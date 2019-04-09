interface Project {
  create(any): Promise<object>;
}

export default class ProjectController {
  Project: Project;

  constructor(Project: Project) {
    this.Project = Project;
  }

  saveProject = async (request, response, next): Promise<void> => {
    try {
      const project = request.body;
      const savedProject = await this.Project.create(project);

      response.status(200).json(savedProject);
    } catch (error) {
      if (error.name === 'ValidationError') {
        error.status = 422;
        next(error);
      } else {
        next(error);
      }
    }
  }
}
