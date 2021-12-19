import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.method === 'OPTIONS') {
    next();
  }

  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Не авторизован' });
    }
    req.user = jwt.verify(token, process.env.jwt_key || '');
    next();
  } catch (e) {
    res.status(401).json({ message: 'не авторизован' });
  }
};
