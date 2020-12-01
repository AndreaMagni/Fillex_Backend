import './common/env';
import Server from './common/server';
//import routes from './routes';
import fillexRouter from './api/controllers/router';

export default new Server().router(fillexRouter).listen(process.env.PORT);