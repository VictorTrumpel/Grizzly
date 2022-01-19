import { Router, IRouter } from 'express';
import artistRouter from './artistRouter';

const router: IRouter = Router();

router.use('/artist', artistRouter);

export default router;
