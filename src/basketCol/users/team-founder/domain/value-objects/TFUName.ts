import { IUserNameProps, UserName } from '../../../shared/domain/value-objects/UserName';

export class TFUName extends UserName {
  public constructor(value: IUserNameProps) {
    super(value);
  }
}
