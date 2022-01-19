import { UploadedFile } from 'express-fileupload';
import { NextFunction } from 'express';
import { avatarValid } from './avatarValid';
import { loginDataValid } from './loginDataValid';
import { nickNameValid } from './nickNameValid';

export type RegistrationsFields = {
  userAvatar: UploadedFile | UploadedFile[] | null;
  userEmail: any;
  userPassword: any;
  userNickname: any;
};

export type RegistrationsValidFields = {
  avatar: UploadedFile;
  email: string;
  password: string;
  nickname: string;
};

export const registrationValid = async (
  next: NextFunction,
  fields: RegistrationsFields,
  callback: (fields: RegistrationsValidFields) => void
) => {
  const { userAvatar, userPassword, userEmail, userNickname } = fields;

  const {
    email,
    password,
    err: loginDataErr
  } = await loginDataValid(userEmail, userPassword);

  const { avatar, err: avatarErr } = avatarValid(userAvatar);

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
