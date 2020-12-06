import * as express from 'express';
// eslint-disable-next-line node/no-missing-import
import userController from './userController';

export default express.Router().get('/', userController.all);
