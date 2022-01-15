import { ApiError, IApiError } from '../../error/ApiError';
import { Artist } from '../../models/models';

type LoginDataPayload = {
  email: string | null;
  password: string | null;
  err: IApiError | null;
};

export const loginDataValid = async (
  email: any,
  password: any
): Promise<LoginDataPayload> => {
  if (typeof email !== 'string') {
    return {
      email: null,
      password: null,
      err: ApiError.badRequest('Некорректный email или password')
    };
  }

  if (typeof password !== 'string') {
    return {
      email: null,
      password: null,
      err: ApiError.badRequest('Некорректный email или password')
    };
  }

  const candidate = await Artist.findOne({ where: { email } });

  if (candidate) {
    return {
      email: null,
      password: null,
      err: ApiError.badRequest('Пользователь с таким email уже существует')
    };
  }

  return { email, password, err: null };
};
