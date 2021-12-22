import { Router, IRouter } from 'express';
import userRouter from './userRouter';
import typeRouter from './typeRouter';
import deviceRouter from './deviceRouter';
import artistRouter from './artistRouter';
import { authMiddleware } from '../middleware/authMiddleware';

const router: IRouter = Router();

router.use('/type', authMiddleware, typeRouter);
router.use('/device', authMiddleware, deviceRouter);
router.use('/user', userRouter);
router.use('/artist', artistRouter);

export default router;
