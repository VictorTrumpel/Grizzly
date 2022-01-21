import { songController } from '../controllers/songsController';

import { Router, IRouter } from 'express';

const songRouter: IRouter = Router();

songRouter.post('/upload', function (...args) {
  songController.upload(...args);
});

export default songRouter;
