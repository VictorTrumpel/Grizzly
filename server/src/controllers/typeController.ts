// import { Type } from '../models/models';
// import { ApiError } from '../error/ApiError';
// import { Request, Response } from 'express';
//
// interface ITypeController {
//   create(req: Request, res: Response): Promise<any>;
//   getList(req: Request, res: Response): Promise<any>;
// }
//
// class TypeController implements ITypeController {
//   async create(req: Request, res: Response): Promise<any> {
//     try {
//       const { name } = req.body;
//       const type = await Type.create({ name });
//       return res.json(type);
//     } catch (e) {
//       console.log(e);
//     }
//   }
//   async getList(req: Request, res: Response): Promise<any> {
//     try {
//       const types = await Type.findAll();
//       return res.json(types);
//     } catch (e) {
//       console.log(e);
//     }
//   }
// }
