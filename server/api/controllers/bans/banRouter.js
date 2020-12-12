import * as express from 'express';
// eslint-disable-next-line node/no-missing-import
import banController from './banController';

export default express
  .Router()
  .get('/', banController.all)
  .post('/', banController.create);
