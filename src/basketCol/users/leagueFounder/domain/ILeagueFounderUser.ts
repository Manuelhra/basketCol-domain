import { IUser } from '../../shared/domain/IUser';

export interface ILeagueFounderUser extends IUser {
  name: { firstName: string; lastName: string; };
  biography: string;
}
