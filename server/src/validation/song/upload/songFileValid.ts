import { UploadedFile } from 'express-fileupload';
import { ApiError, IApiError } from '../../../error/ApiError';
import path from 'path';

const ALLOWABLE_EXT = ['.wav', '.mp3'];

export const songFileValid = (
  songFile: UploadedFile | UploadedFile[] | null
): {
  songFile: UploadedFile | null;
  err: IApiError | null;
} => {
  if (!songFile) {
    return { songFile: null, err: ApiError.internal('Файл не добавлен') };
  }

  if (songFile instanceof Array) {
    return {
      songFile: null,
      err: ApiError.internal('Добавлено несколько файлов, но требуется один')
    };
  }

  const extname = path.extname(songFile.name);

  if (!~ALLOWABLE_EXT.indexOf(extname)) {
    return {
      songFile: null,
      err: ApiError.internal(
        `Допустимые расширения файла: ${ALLOWABLE_EXT.join(', ')}`
      )
    };
  }

  return { songFile, err: null };
};
