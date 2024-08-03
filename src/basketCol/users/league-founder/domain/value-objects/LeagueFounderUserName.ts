import { IUserNameProps, UserName } from '../../../shared/domain/value-objects/UserName';

export class LeagueFounderUserName extends UserName {
  public constructor(value: IUserNameProps) {
    super(value);
  }
}
