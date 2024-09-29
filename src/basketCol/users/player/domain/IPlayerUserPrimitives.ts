import { IUserPrimitives } from '../../shared/domain/IUserPrimitives';

interface IPlayerUserCredentials {
  nickname: string;
}

export interface IPlayerUserPrimitives extends IUserPrimitives, IPlayerUserCredentials {}
