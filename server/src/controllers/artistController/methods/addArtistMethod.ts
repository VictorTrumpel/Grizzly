import { Response } from 'express';
import { ArtistValidFields } from '../../../validation/artist/artistRegistrationValid';
import bcrypt from 'bcrypt';
import { Artist } from '../../../models/models';
import { ArtistController } from '../artistController';
import path from 'path';
import * as uuid from 'uuid';

export const addArtistMethod = async (
  res: Response,
  artistData: ArtistValidFields
) => {
  const { password, email, avatar, nickname } = artistData;

  const extname = path.extname(avatar.name);
  const filename = uuid.v4() + extname;

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
