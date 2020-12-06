import banRouter from './bans/banRouter';
import championRouter from './champions/championRouter';
import matchRouter from './matches/matchRouter';
import profileRouter from './profiles/profileRouter';
import userRouter from './users/userRouter';
import warningRouter from './warnings/warningRouter';
export const baseRoute = '/api/fillex';

export default function routes(app) {
  app.use(`${baseRoute}/bans`, banRouter);
  app.use(`${baseRoute}/champions`, championRouter);
  app.use(`${baseRoute}/matches`, matchRouter);
  app.use(`${baseRoute}/profiles`, profileRouter);
  app.use(`${baseRoute}/users`, userRouter);
  app.use(`${baseRoute}/warnings`, warningRouter);
}
