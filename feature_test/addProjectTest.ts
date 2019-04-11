/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-underscore-dangle */
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

  describe('When valid new project is posted to the api', function () {
    let response;
    let savedProject;

    beforeEach(async () => {
      response = await request(hitchApi)
        .post('/project')
        .send(newProject)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json');

      const allSavedProjects = await Project.find({}, '', { lean: true });
      savedProject = allSavedProjects[0];
    });

    it('should add a project to the database with a project name', async function () {
      expect(savedProject.name).equals(newProject.name);
    });

    it('should return the new saved project with a generated id', async function () {
      expect(savedProject._id.toString()).equals(response.body._id);
    });

    it('should, if no name provided, return a status of 422 and an error', async function () {
      expect(response.status).equals(422);
    });
  });
});
