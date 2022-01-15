import { UploadedFile } from 'express-fileupload';
import { NextFunction } from 'express';
import { artistAvatarValid } from './artistAvatarValid';
import { loginDataValid } from './loginDataValid';
import { nickNameValid } from './nickNameValid';

export type ArtistFields = {
  userAvatar: UploadedFile | UploadedFile[] | null;
  userEmail: any;
  userPassword: any;
  userNickname: any;
};

export type ArtistValidFields = {
  avatar: UploadedFile;
  email: string;
  password: string;
  nickname: string;
};

export const artistRegistrationValid = async (
  next: NextFunction,
  fields: ArtistFields,
  callback: (fields: ArtistValidFields) => void
) => {
  const { userAvatar, userPassword, userEmail, userNickname } = fields;

  const {
    email,
    password,
    err: loginDataErr
  } = await loginDataValid(userEmail, userPassword);

  const { avatar, err: avatarErr } = artistAvatarValid(userAvatar);

  const { nickname, err: nickNameErr } = await nickNameValid(userNickname);

  if (!avatar || avatarErr) {
    return next(avatarErr);
  }

  if (!email || !password || loginDataErr) {
    return next(loginDataErr);
  }

  if (!nickname || nickNameErr) {
    return next(nickNameErr);
  }

  callback({ avatar, email, password, nickname });
};
