import { artistController } from '../controllers/artistController';
import { ArtistController } from '../controllers/artistController/artistController';
import { Router, IRouter } from 'express';

import { authMiddleware } from '../middleware/authMiddleware';

const artistRouter: IRouter = Router();

artistRouter.get('/', authMiddleware, artistController.getList);

artistRouter.get('/auth', authMiddleware, artistController.auth);

artistRouter.post('/login', function (...args) {
  artistController.login(...args);
});

artistRouter.post('/registration', function (...args) {
  artistController.registration(...args);
});

export default artistRouter;
