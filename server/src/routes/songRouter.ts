import { songController } from '../controllers/songsController';

import { Router, IRouter } from 'express';

const songRouter: IRouter = Router();

songRouter.post('/upload', function (...args) {
  songController.upload(...args);
});

songRouter.get('/', songController.getList);
songRouter.get('/:id', songController.getSong);

export default songRouter;
