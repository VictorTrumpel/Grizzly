import { NextFunction, Request, Response } from 'express';

import { Artist } from '../../models/models';
import jwt from 'jsonwebtoken';
import {
  registrationValid,
  RegistrationsFields
} from '../../validation/artist/registration/registrationValid';

import { addArtistMethod } from './methods/addArtistMethod';

import {
  LoginFields,
  loginValid
} from '../../validation/artist/login/loginValid';
import { getArtistTokenMethod } from './methods/getArtistTokenMethod';

interface IArtistController {
  registration(req: Request, res: Response, next: NextFunction): void;
  auth(req: Request, res: Response, next: NextFunction): Promise<any>;
}

export class ArtistController implements IArtistController {
  private addArtist = addArtistMethod;
  private getArtistToken = getArtistTokenMethod;

  async registration(req: Request, res: Response, next: NextFunction) {
    const userRegData: RegistrationsFields = {
      userAvatar: req?.files?.avatar || null,
      userEmail: req.body.email,
      userPassword: req.body.password,
      userNickname: req.body.nickname
    };

    registrationValid(next, userRegData, this.addArtist.bind(null, res));
  }

  async getList(req: Request, res: Response, next: NextFunction) {
    const artistList = await Artist.findAll(req.body);

    const parsedList = artistList.map((artist) => ({
      id: artist.getDataValue('id'),
      email: artist.getDataValue('email'),
      nickname: artist.getDataValue('nickname'),
      avatar: artist.getDataValue('avatar')
    }));

    return res.json(parsedList);
  }

  async login(req: Request, res: Response, next: NextFunction) {
    const userLoginData: LoginFields = {
      userEmail: req.body.email,
      userPassword: req.body.password
    };

    loginValid(next, userLoginData, this.getArtistToken.bind(null, res, next));
  }

  static GenerateUserJwt(id: number, email: string, role: string) {
    return jwt.sign({ id, email, role }, process.env.jwt_key || '', {
      expiresIn: '24h'
    });
  }

  async auth(req: Request, res: Response, next: NextFunction): Promise<any> {
    const token = ArtistController.GenerateUserJwt(
      req.user.id,
      req.user.email,
      req.user.role
    );
    return res.json(token);
  }
}

export const artistController = new ArtistController();
