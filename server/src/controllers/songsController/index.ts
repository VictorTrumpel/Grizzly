import { NextFunction, Request, Response } from 'express';
import {
  SongUploadFields,
  uploadSongValid
} from '../../validation/song/upload/uploadSongValid';

type ISongController = {
  getList(req: Request, res: Response, next: NextFunction): Promise<any>;
  upload(req: Request, res: Response, next: NextFunction): void;
};

export class SongController implements ISongController {
  async upload(req: Request, res: Response, next: NextFunction) {
    const songUploadData: SongUploadFields = {
      userSongFile: req?.files?.songFile || null,
      userSongImg: req?.files?.songImg || null,
      userSongName: req.body.songName
    };

    uploadSongValid(next, songUploadData, this.addSong.bind(null, res));
  }

  private addSong(res: Response) {}

  async getList(req: Request, res: Response, next: NextFunction) {}
}

export const songController = new SongController();
