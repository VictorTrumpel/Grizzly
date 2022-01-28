import { NextFunction, Request, Response } from 'express';
import {
  SongUploadFields,
  uploadSongValid
} from '../../validation/song/upload/uploadSongValid';
import { addSongMethod } from './methods/addSongMethod';
import { Song } from '../../models/models';

type ISongController = {
  getList(req: Request, res: Response, next: NextFunction): Promise<any>;
  upload(req: Request, res: Response, next: NextFunction): void;
};

export class SongController implements ISongController {
  private addSong = addSongMethod;

  async upload(req: Request, res: Response, next: NextFunction) {
    const songUploadData: SongUploadFields = {
      userSongFile: req?.files?.songFile || null,
      userSongImg: req?.files?.songImg || null,
      userSongName: req.body.songName
    };

    uploadSongValid(
      next,
      songUploadData,
      this.addSong.bind(null, req, res, next)
    );
  }

  async getSong(req: Request, res: Response) {
    const id = req.path.replace('/', '');

    const song = await Song.findOne({ where: { id } });

    return res.json(song);
  }

  async getList(req: Request, res: Response, next: NextFunction) {
    const artistList = await Song.findAll({ where: req.body });

    res.json(artistList);
  }
}

export const songController = new SongController();
