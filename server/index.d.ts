import { User } from './src/models/models';

export declare global {
  namespace Express {
    interface Request {
      user: User | string;
    }
  }
}
