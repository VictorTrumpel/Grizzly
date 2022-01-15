import { artistController } from '../controllers/artistController';
import { ArtistController } from '../controllers/artistController/artistController';
import { Router, IRouter } from 'express';

const artistRouter: IRouter = Router();

artistRouter.post('/registration', function (...args) {
  artistController.registration(...args);
});

export default artistRouter;
