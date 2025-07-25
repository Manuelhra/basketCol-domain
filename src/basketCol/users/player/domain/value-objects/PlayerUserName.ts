import { IUserNameProps, UserName } from '../../../shared/domain/value-objects/UserName';

export class PlayerUserName extends UserName {
  private constructor(value: IUserNameProps) {
    super(value);
  }

  public static create(value: IUserNameProps): PlayerUserName {
    return new PlayerUserName(value);
  }
}
