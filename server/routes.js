// FILE MORTO


//import examplesRouter from './api/controllers/examples/router';
import fillexRouter from './api/controllers/router';

export default function routes(app) {
  app.use('/api/v1/examples', fillexRouter);
}
