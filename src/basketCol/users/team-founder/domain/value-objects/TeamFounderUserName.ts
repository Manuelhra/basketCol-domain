import { IUserNameProps, UserName } from '../../../shared/domain/value-objects/UserName';

export class TeamFounderUserName extends UserName {
  private constructor(value: IUserNameProps) {
    super(value);
  }

  public static create(value: IUserNameProps): TeamFounderUserName {
    return new TeamFounderUserName(value);
  }
}
