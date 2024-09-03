import { IUser } from '../../shared/domain/IUser';

interface IPlayerUserCredentials {
  nickname: string;
}

export interface IPlayerUser extends IUser, IPlayerUserCredentials {}
