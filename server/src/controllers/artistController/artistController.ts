import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../../error/ApiError';
import { Artist } from '../../models/models';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {
  artistRegistrationValid,
  ArtistFields,
  ArtistValidFields
} from '../../validation/artist/artistRegistrationValid';

import { addArtistMethod } from './methods/addArtistMethod';

interface IArtistController {
  registration(req: Request, res: Response, next: NextFunction): Promise<any>;
  // login(req: Request, res: Response, next: NextFunction): Promise<any>;
  // auth(req: Request, res: Response, next: NextFunction): Promise<any>;
}

export class ArtistController implements IArtistController {
  async registration(req: Request, res: Response, next: NextFunction) {
    const userRegData: ArtistFields = {
      userAvatar: req?.files?.avatar || null,
      userEmail: req.body.email,
      userPassword: req.body.password,
      userNickname: req.body.nickname
    };

    artistRegistrationValid(next, userRegData, this.addArtist.bind(null, res));
  }

  private addArtist = addArtistMethod;

  static GenerateUserJwt(id: number, email: string, role: string) {
    return jwt.sign({ id, email, role }, process.env.jwt_key || '', {
      expiresIn: '24h'
    });
  }

  // async login(req: Request, res: Response, next: NextFunction) {
  //   const { email, password } = req.body;
  //   const user = await User.findOne({ where: { email } });
  //   if (!user) {
  //     return next(ApiError.internal('Пользователь с таким именем не найден'));
  //   }
  //
  //   const userPassword = user.getDataValue('password');
  //   const userId = user.getDataValue('id');
  //   const userEmail = user.getDataValue('email');
  //   const userRole = user.getDataValue('role');
  //
  //   const isPassword = bcrypt.compareSync(password, userPassword);
  //
  //   if (!isPassword) {
  //     return next(ApiError.internal('Указан неверный пароль'));
  //   }
  //   const token = generateUserJwt(userId, userEmail, userRole);
  //   return res.json(token);
  // }
  //
  // async auth(req: Request, res: Response, next: NextFunction) {
  //   const token = generateUserJwt(req.user.id, req.user.email, req.user.role);
  //   res.json(token);
  // }
}

export const artistController = new ArtistController();
