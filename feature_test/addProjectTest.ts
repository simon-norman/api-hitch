/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { expect } from 'chai';
import request = require('supertest');
import createHitchApi from '../src/server';
import Project from '../src/models/projectModel';

describe('Add project', function () {
  let newProject;
  let hitchApi;

  before(() => {
    hitchApi = createHitchApi();
  });

  beforeEach(() => {
    newProject = { name: 'Brand reorg' };
  });

  it('should add a project to the database with a project name', async function () {
    request(hitchApi)
      .post('/project')
      .send(newProject);

    const allSavedProjects = await Project.find({}, '', { lean: true });
    expect(allSavedProjects[0].name).equals(newProject.name);
  });
});
