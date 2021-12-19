import { Router, IRouter } from 'express';
import { userController } from '../controllers/userController';
import { authMiddleware } from '../middleware/authMiddleware';

const userRouter: IRouter = Router();

userRouter.get('/auth', authMiddleware, userController.auth);
userRouter.post('/registration', userController.registration);
userRouter.post('/login', userController.login);

export default userRouter;
