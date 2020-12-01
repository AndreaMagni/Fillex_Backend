import * as express from 'express';
import userController from './userController';
import baseRoute from '../router';

export default express
  .Router()
  .get(`${baseRoute}/users`, userController.all)
  .get(`/users`, userController.all)
  .get(`/api/fillex/users`, userController.all)
  .get(`/api/fillex/users/`, userController.all)