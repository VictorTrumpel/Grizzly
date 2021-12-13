import { deviceController } from '../controllers/deviceController';
import { Router, IRouter } from 'express';

const deviceRouter: IRouter = Router();

deviceRouter.post('/', deviceController.create);
deviceRouter.get('/', deviceController.getList);

export default deviceRouter;
