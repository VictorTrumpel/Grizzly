import { NextFunction, Request, Response } from 'express';
import { SongUploadValidFields } from '../../../validation/song/upload/uploadSongValid';
import path from 'path';
import * as uuid from 'uuid';
import { Artist, Song } from '../../../models/models';
import { ApiError } from '../../../error/ApiError';

export const addSongMethod = async (
  req: Request,
  res: Response,
  next: NextFunction,
  songData: SongUploadValidFields
) => {
  const { songImg, songFile, songName } = songData;

  const { id: artistId } = req.user;

  const songImgExtname = path.extname(songImg.name);
  const songFileExtname = path.extname(songFile.name);

  const songImgFilename = uuid.v4() + songImgExtname;
  const songFilename = uuid.v4() + songFileExtname;

  songImg.mv(path.resolve(__dirname, '..', 'static', songImgFilename));
  songFile.mv(path.resolve(__dirname, '..', 'static', songFilename));

  const artist = await Artist.findOne({ where: { id: artistId } });

  if (!artist) {
    return next(ApiError.internal('Артист не найден'));
  }

  const song = await Song.create({
    name: songName,
    img: songImgFilename,
    artistName: artist.getDataValue('nickname'),
    artistId,
    src: songFilename
  });

  res.json(song.getDataValue('id'));
};
