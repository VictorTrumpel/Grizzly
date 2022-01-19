import { ApiError, IApiError } from '../../../error/ApiError';
import { Artist } from '../../../models/models';

type NickNamePayload = {
  nickname: string | null;
  err: IApiError | null;
};

export const nickNameValid = async (
  nickname: any
): Promise<NickNamePayload> => {
  if (typeof nickname !== 'string') {
    return {
      nickname: null,
      err: ApiError.badRequest('Некорректный никнейм')
    };
  }

  const candidate = await Artist.findOne({ where: { nickname } });

  if (candidate) {
    return {
      nickname: null,
      err: ApiError.badRequest('Артист с таким никнеймом уже существует')
    };
  }

  return { nickname, err: null };
};
