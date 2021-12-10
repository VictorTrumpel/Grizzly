import { Router, IRouter } from 'express';
import { userController } from '../controllers/userController';

const userRouter: IRouter = Router();

userRouter.post('/registration', userController.registration);
userRouter.post('/login', userController.login);
userRouter.get('/auth', userController.auth);

export default userRouter;
