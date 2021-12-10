import { Router, IRouter } from 'express';
import userRouter from './userRouter';

const router: IRouter = Router();

router.use('/user', userRouter);

export default router;
