import { UserPassword } from '../../../shared/domain/value-objects/UserPassword';

export class PlayerUserPassword extends UserPassword {
  public constructor(value: string) {
    super(value);
  }

  public static create(value: string): PlayerUserPassword {
    return new PlayerUserPassword(value);
  }
}
