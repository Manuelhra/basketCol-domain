import { IUserNameProps, UserName } from '../../../shared/domain/value-objects/UserName';

export class RefereeUserName extends UserName {
  private constructor(value: IUserNameProps) {
    super(value);
  }

  public static create(value: IUserNameProps): RefereeUserName {
    return new RefereeUserName(value);
  }
}
