import { NextFunction } from 'express';
import { loginDataValid } from './loginDataValid';

export type LoginFields = {
  userEmail: any;
  userPassword: any;
};

export type LoginValidFields = {
  email: string;
  password: string;
};

export const loginValid = async (
  next: NextFunction,
  fields: LoginFields,
  callback: (fields: LoginValidFields) => void
) => {
  const { userEmail, userPassword } = fields;

  const {
    email,
    password,
    err: loginDataErr
  } = await loginDataValid(userEmail, userPassword);

  if (!email || !password || loginDataErr) {
    return next(loginDataErr);
  }

  callback({ email, password });
};
