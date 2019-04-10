/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { expect } from 'chai';
import request = require('supertest');
import createHitchApi from '../src/createApp';
import Project from '../src/models/projectModel';

describe('Add project', function () {
  let newProject;
  let hitchApi;

  before(async () => {
    hitchApi = await createHitchApi();
  });

  beforeEach(() => {
    newProject = { name: 'Brand reorg' };
  });

  it('should add a project to the database with a project name', async function () {
    console.log('stuff');
    await request(hitchApi)
      .post('/project')
      .send(newProject)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    const allSavedProjects = await Project.find({}, '', { lean: true });
    expect(allSavedProjects[0].name).equals(newProject.name);
  });
});
