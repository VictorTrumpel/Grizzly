import { Router, IRouter } from 'express';
import userRouter from './userRouter';
import typeRouter from './typeRouter';
import deviceRouter from './deviceRouter';

const router: IRouter = Router();

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/device', deviceRouter);

export default router;
