import { Router, IRouter } from 'express';
import userRouter from './userRouter';
import typeRouter from './typeRouter';
import deviceRouter from './deviceRouter';
import { authMiddleware } from '../middleware/authMiddleware';

const router: IRouter = Router();

router.use('/type', authMiddleware, typeRouter);
router.use('/device', authMiddleware, deviceRouter);
router.use('/user', userRouter);

export default router;
