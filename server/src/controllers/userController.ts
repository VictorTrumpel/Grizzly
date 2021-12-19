import { Request, Response, NextFunction } from 'express';
import { Model } from 'sequelize';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { ApiError } from '../error/ApiError';
import { User, Basket } from '../models/models';

interface IUserController {
  registration(req: Request, res: Response, next: NextFunction): Promise<any>;
  login(req: Request, res: Response, next: NextFunction): Promise<any>;
  auth(req: Request, res: Response, next: NextFunction): Promise<any>;
}

const generateUserJwt = (id: number, email: string, role: string) => {
  return jwt.sign({ id, email, role }, process.env.jwt_key || '', {
    expiresIn: '24h'
  });
};

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

    const userId = user.getDataValue('id');
    const userEmail = user.getDataValue('email');
    const userRole = user.getDataValue('role');

    await Basket.create({ userId, name: `basket-${userId}` });

    const jwtToken = generateUserJwt(userId, userEmail, userRole);

    return res.json(jwtToken);
  }

  async login(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(ApiError.internal('Пользователь с таким именем не найден'));
    }

    const userPassword = user.getDataValue('password');
    const userId = user.getDataValue('id');
    const userEmail = user.getDataValue('email');
    const userRole = user.getDataValue('role');

    const isPassword = bcrypt.compareSync(password, userPassword);

    if (!isPassword) {
      return next(ApiError.internal('Указан неверный пароль'));
    }
    const token = generateUserJwt(userId, userEmail, userRole);
    return res.json(token);
  }

  async auth(req: Request, res: Response, next: NextFunction) {
    const token = generateUserJwt(req.user.id, req.user.email, req.user.role);
    res.json(token);
  }
}

export const userController = new UserController();
