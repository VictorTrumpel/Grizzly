import { UploadedFile } from 'express-fileupload';
import { ApiError, IApiError } from '../../error/ApiError';
import { NextFunction } from 'express';

export const artistAvatarValid = (
  avatar: UploadedFile | UploadedFile[] | null
): { avatar: UploadedFile | null; err: IApiError | null } => {
  if (!avatar) {
    return ApiError.internal('Файл не добавлен');
  }

  if (avatar instanceof Array) {
    return ApiError.internal('Добавлено несколько файлов, но требуется один');
  }

  return null;
};
