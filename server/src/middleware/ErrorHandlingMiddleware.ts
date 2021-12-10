import { ApiError } from '../error/ApiError';
import { Request, Response, NextFunction } from 'express';

export const ErrorHandlingMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message });
  }
  return res.status(500).json({ message: 'unknown Error' });
};
