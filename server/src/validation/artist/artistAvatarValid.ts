import { UploadedFile } from 'express-fileupload';
import { ApiError, IApiError } from '../../error/ApiError';
import path from 'path';

const ALLOWABLE_EXT = ['.jpg', '.png'];

export const artistAvatarValid = (
  avatar: UploadedFile | UploadedFile[] | null
): { avatar: UploadedFile | null; err: IApiError | null } => {
  if (!avatar) {
    return { avatar: null, err: ApiError.internal('Файл не добавлен') };
  }

  if (avatar instanceof Array) {
    return {
      avatar: null,
      err: ApiError.internal('Добавлено несколько файлов, но требуется один')
    };
  }

  const extname = path.extname(avatar.name);

  if (!~ALLOWABLE_EXT.indexOf(extname)) {
    return {
      avatar: null,
      err: ApiError.internal(
        `Допустимые расширения файла: ${ALLOWABLE_EXT.join(', ')}`
      )
    };
  }

  return { avatar, err: null };
};
