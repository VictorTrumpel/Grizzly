import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { ApiError } from '../error/ApiError';
import { User, Basket } from '../models/models';

interface IUserController {
  registration(req: Request, res: Response, next: NextFunction): Promise<any>;
  login(req: Request, res: Response): Promise<any>;
  auth(req: Request, res: Response, next: NextFunction): Promise<any>;
}

export class UserController implements IUserController {
  async registration(req: Request, res: Response, next: NextFunction) {
    const { email, password, role } = req.body;
    if (!email || !password) {
      return next(ApiError.badRequest('Некорректный email или password'));
    }

    const candidate = await User.findOne({ where: { email } });

    if (candidate) {
      return next(
        ApiError.badRequest('Пользователь с таким email уже существует')
      );
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({
      email,
      role,
      password: hashPassword
    });

    return res.json(user.id);
  }

  async login(req: Request, res: Response) {}

  async auth(req: Request, res: Response, next: NextFunction) {
    const { id } = req.query;
    if (!id) {
      return next(ApiError.badRequest('bad request'));
    }
    res.json(id);
  }
}

export const userController = new UserController();
