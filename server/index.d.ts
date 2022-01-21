import { User } from './src/models/models';
import { UploadedFile } from 'express-fileupload';

export declare global {
  namespace Express {
    interface Request {
      user: User | string;
      files?:
        | (fileUpload.FileArray & {
            songFile: UploadedFile;
            songImg: UploadedFile;
            avatar: UploadedFile;
          })
        | undefined;
    }
  }
}
