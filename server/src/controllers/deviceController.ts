import { Request, Response } from 'express';

interface IDeviceController {
  create(req: Request, res: Response): Promise<any>;
  getAll(req: Request, res: Response): Promise<any>;
  getItem(req: Request, res: Response): Promise<any>;
}

export class DeviceController implements IDeviceController {
  async create(req: Request, res: Response) {}

  async getAll(req: Request, res: Response) {}

  async getItem(req: Request, res: Response) {
    res.json({ message: 'Device controller works' });
  }
}

export const deviceController = new DeviceController();
