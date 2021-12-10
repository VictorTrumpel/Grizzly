import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../error/ApiError';

interface IUserController {
  registration(req: Request, res: Response): Promise<any>;
  login(req: Request, res: Response): Promise<any>;
  auth(req: Request, res: Response, next: NextFunction): Promise<any>;
}

export class UserController implements IUserController {
  async registration(req: Request, res: Response) {}

  async login(req: Request, res: Response) {}

  async auth(req: Request, res: Response, next: NextFunction) {
    const { id } = req.query;
    if (!id) {
      return next(ApiError.badRequest('bad request'));
    }
    console.log(id);
    res.json(id);
  }
}

export const userController = new UserController();
