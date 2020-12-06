import * as express from 'express';
// eslint-disable-next-line node/no-missing-import
import championController from './championController';

export default express.Router().get('/', championController.all);
