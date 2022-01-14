import { UploadedFile } from 'express-fileupload';
import { NextFunction } from 'express';
import { ApiError } from '../../error/ApiError';
import { artistAvatarValid } from './artistAvatarValid';

export type ArtistFields = {
  userAvatar: UploadedFile | UploadedFile[] | null;
};

export type ArtistValidFields = {
  avatar: UploadedFile;
};

export const artistRegistrationValid = (
  next: NextFunction,
  fields: ArtistFields,
  callback: (fields: ArtistValidFields) => void
) => {
  const { userAvatar } = fields;

  const avatarErr = artistAvatarValid(userAvatar);

  if (avatarErr) {
    return next(avatarErr);
  }

  callback({ avatar: userAvatar } as ArtistValidFields);
};
