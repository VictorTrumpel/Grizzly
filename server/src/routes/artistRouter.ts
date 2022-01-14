import { artistController } from '../controllers/artistController';
import { Router, IRouter } from 'express';

const artistRouter: IRouter = Router();

artistRouter.post('/registration', artistController.registration);

export default artistRouter;
