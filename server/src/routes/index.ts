import { Router, IRouter } from 'express';
import { authMiddleware } from '../middleware/authMiddleware';

import artistRouter from './artistRouter';
import songRouter from './songRouter';

const router: IRouter = Router();

router.use('/artist', artistRouter);
router.use('/song', authMiddleware, songRouter);

export default router;
