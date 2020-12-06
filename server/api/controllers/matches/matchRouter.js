import * as express from 'express';
// eslint-disable-next-line node/no-missing-import
import matchController from './matchController';

export default express.Router().get('/', matchController.all);
