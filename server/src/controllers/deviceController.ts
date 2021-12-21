import { Request, Response, NextFunction } from 'express';
import path from 'path';
import * as uuid from 'uuid';
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
      const device = await Device.findOne({ where: { name } });

      if (!img) {
        return next(ApiError.internal('Файл не добавлен'));
      }

      if (img instanceof Array) {
        return next(
          ApiError.internal('Добавлено несколько файлов, но требуется один')
        );
      }

      if (device) {
        return next(ApiError.internal('Файл с таким именем уже имеется'));
      }

      const extname = path.extname(img.name);
      const filename = uuid.v4() + extname;
      const newDevice = await Device.create({ name, img: filename });

      img.mv(path.resolve(__dirname, '..', 'static', filename));

      return res.json(newDevice);
    } catch (e) {
      next(ApiError.badRequest((e as Error).message));
    }
  }

  async getList(req: Request, res: Response) {
    const { name } = req.query;

    const devices = await Device.findAll({ where: { name } });

    return res.json(devices);
  }

  async getItem(req: Request, res: Response) {
    const { id } = req.params;

    const device = await Device.findOne({ where: { id } });

    res.json(device);
  }
}

export const deviceController = new DeviceController();
