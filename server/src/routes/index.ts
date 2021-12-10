import { Router, IRouter } from 'express';
import userRouter from './userRouter';
import typeRouter from './typeRouter';

const router: IRouter = Router();

router.use('/user', userRouter);
router.use('/type', typeRouter);

export default router;
