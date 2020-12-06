import * as express from 'express';
// eslint-disable-next-line node/no-missing-import
import warningController from './warningController';

export default express.Router().get('/', warningController.all);
