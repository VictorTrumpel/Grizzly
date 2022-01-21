import { Response } from 'express';
import { ValidRegistrationsFields } from '../../../validation/artist/registration/registrationValid';
import bcrypt from 'bcrypt';
import { Artist } from '../../../models/models';
import { ArtistController } from '../index';
import path from 'path';
import * as uuid from 'uuid';

export const addArtistMethod = async (
  res: Response,
  artistData: ValidRegistrationsFields
) => {
  const { password, email, avatar, nickname } = artistData;

  const extname = path.extname(avatar.name);
  const filename = uuid.v4() + extname;

  avatar.mv(path.resolve(__dirname, '..', 'static', filename));

  const hashPassword = await bcrypt.hash(password, 5);

  const artist = await Artist.create({
    email,
    password: hashPassword,
    nickname,
    avatar: filename
  });

  const userId = artist.getDataValue('id');
  const userEmail = artist.getDataValue('email');
  const userRole = artist.getDataValue('role');

  const jwtToken = ArtistController.GenerateUserJwt(
    userId,
    userEmail,
    userRole
  );

  return res.json(jwtToken);
};
