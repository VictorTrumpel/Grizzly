import { Router, IRouter } from 'express';
import { typeController } from '../controllers/typeController';

const typeRouter: IRouter = Router();

typeRouter.post('/', typeController.create);

export default typeRouter;
