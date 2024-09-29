import { IUserNameProps, UserName } from '../../../shared/domain/value-objects/UserName';

export class HostUserName extends UserName {
  private constructor(value: IUserNameProps) {
    super(value);
  }

  public static create(value: IUserNameProps): HostUserName {
    return new HostUserName(value);
  }
}
