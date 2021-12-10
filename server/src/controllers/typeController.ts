import { Type } from '../models/models';
import { ApiError } from '../error/ApiError';
import { Request, Response } from 'express';

interface ITypeController {
  create(req: Request, res: Response): Promise<any>;
  getList(req: Request, res: Response): Promise<any>;
}

class TypeController implements ITypeController {
  async create(req: Request, res: Response): Promise<any> {
    const { name } = req.body;
    const type = await Type.create({ id: 2, name });
    return res.json(type);
  }
  async getList(req: Request, res: Response): Promise<any> {}
}

export const typeController = new TypeController();
