import { Request, Response, NextFunction } from 'express';
import * as uuid from 'uuid';
import path from 'path';
import { Device } from '../models/models';
import { ApiError } from '../error/ApiError';

interface IDeviceController {
  create(req: Request, res: Response, next: NextFunction): Promise<any>;
  getList(req: Request, res: Response): Promise<any>;
  getItem(req: Request, res: Response): Promise<any>;
}

export class DeviceController implements IDeviceController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name } = req.body;
      const { img } = req.files || { img: null };

      const fileName = uuid.v4() + '.jpg';

      if (!(img instanceof Array)) {
        img?.mv(path.resolve(__dirname, '..', 'static', fileName));
      }

      const device = await Device.create({ name, img: fileName });

      return res.json(device);
    } catch (e) {
      next(ApiError.badRequest((e as Error).message));
    }
  }

  async getList(req: Request, res: Response) {
    const { name } = req.query;

    console.log(name);

    const devices = await Device.findAll({ where: { name } });

    return res.json(devices);
  }

  async getItem(req: Request, res: Response) {
    res.json({ message: 'Device controller works' });
  }
}

export const deviceController = new DeviceController();
