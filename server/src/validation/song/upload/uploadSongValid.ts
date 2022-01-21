import { NextFunction } from 'express';
import { UploadedFile } from 'express-fileupload';
import { songImgValid } from './songImgValid';
import { songFileValid } from './songFileValid';
import { songNameValid } from './songNameValid';

export type SongUploadFields = {
  userSongFile: UploadedFile | UploadedFile[] | null;
  userSongImg: UploadedFile | UploadedFile[] | null;
  userSongName: any;
};

export type ValidUploadFields = {
  songFile: UploadedFile;
  songImg: UploadedFile;
  songName: string;
};

export const uploadSongValid = (
  next: NextFunction,
  fields: SongUploadFields,
  callback: (fields: ValidUploadFields) => void
) => {
  const { userSongImg, userSongFile, userSongName } = fields;

  const { songImg, err: songImgErr } = songImgValid(userSongImg);

  if (!songImg || songImgErr) {
    return next(songImgErr);
  }

  const { songFile, err: songFileErr } = songFileValid(userSongFile);

  if (!songFile || songFileErr) {
    return next(songFileErr);
  }

  const { songName, err: songNameErr } = songNameValid(userSongName);

  if (!songName || songNameErr) {
    return next(songNameErr);
  }

  callback({ songImg, songFile, songName });
};
