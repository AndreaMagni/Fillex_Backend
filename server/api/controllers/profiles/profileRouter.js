import * as express from 'express';
// eslint-disable-next-line node/no-missing-import
import profileController from './profileController';

export default express.Router().get('/', profileController.all);
