/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { expect } from 'chai';
import mongoose = require('mongoose');
import request = require('supertest');
import createHitchApi from '../src/createApp';
import Project from '../src/models/projectModel';

describe('Add project', function () {
  let newProject;
  let hitchApi;

  const ensureProjectCollectionEmpty = async () => {
    const projects = await Project.find({});
    if (projects.length) {
      await Project.collection.drop();
    }
  };

  before(async () => {
    hitchApi = await createHitchApi();
  });

  beforeEach(async () => {
    await ensureProjectCollectionEmpty();

    newProject = { name: 'Brand reorg' };
  });

  after(async () => {
    await ensureProjectCollectionEmpty();
    await mongoose.connection.close();
    process.exit();
  });

  it('should add a project to the database with a project name', async function () {
    await request(hitchApi)
      .post('/project')
      .send(newProject)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    const allSavedProjects = await Project.find({}, '', { lean: true });
    expect(allSavedProjects[0].name).equals(newProject.name);
  });

  it('should return the new saved project with a generated id', async function () {
    const response = await request(hitchApi)
      .post('/project')
      .send(newProject)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    const allSavedProjects = await Project.find({}, '', { lean: true });
    expect(allSavedProjects[0].id).equals(response.body.id);
  });
});
