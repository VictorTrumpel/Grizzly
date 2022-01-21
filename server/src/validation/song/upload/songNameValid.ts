import { UploadedFile } from 'express-fileupload';
import { ApiError, IApiError } from '../../../error/ApiError';
import { type } from 'os';

export const songNameValid = (
  songName: any
): {
  songName: string | null;
  err: IApiError | null;
} => {
  if (typeof songName !== 'string') {
    return {
      songName: null,
      err: ApiError.internal('Название песни не добавлено')
    };
  }

  return { songName, err: null };
};
