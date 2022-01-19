import { NextFunction, Response } from 'express';
import { Artist } from '../../../models/models';
import { ApiError } from '../../../error/ApiError';
import bcrypt from 'bcrypt';

import { LoginValidFields } from '../../../validation/artist/login/loginValid';
import { ArtistController } from '../index';

export const getArtistTokenMethod = async (
  res: Response,
  next: NextFunction,
  artistData: LoginValidFields
) => {
  const { email, password } = artistData;

  const artist = await Artist.findOne({ where: { email } });

  if (!artist) {
    return next(ApiError.internal('Пользователь с таким именем не найден'));
  }

  const artistPassword = artist.getDataValue('password');
  const artistId = artist.getDataValue('id');
  const artistEmail = artist.getDataValue('email');
  const artistRole = artist.getDataValue('role');

  const isPassword = bcrypt.compareSync(password, artistPassword);

  if (!isPassword) {
    return next(ApiError.internal('Указан неверный пароль'));
  }

  const token = ArtistController.GenerateUserJwt(
    artistId,
    artistEmail,
    artistRole
  );

  return res.json(token);
};
