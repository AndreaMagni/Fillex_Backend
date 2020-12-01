//import express from 'express';
import l from '../../common/logger';
import userRouter from './users/userRouter';

//const mainContext = express();
export const baseRoute = '/api/fillex';

//mainContext.use(`${baseRoute}/users`, userRouter)

export default function routes(app) {
    l.info(`Pino arrivato nel router principale`); 
    app.use(`${baseRoute}/users`, userRouter);
}
