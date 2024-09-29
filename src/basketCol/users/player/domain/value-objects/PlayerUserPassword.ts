import { UserPassword } from '../../../shared/domain/value-objects/UserPassword';

export class PlayerUserPassword extends UserPassword {
  private constructor(value: string, skipValidation: boolean = false) {
    super(value, skipValidation);
  }

  public static create(value: string, skipValidation: boolean = false): PlayerUserPassword {
    return new PlayerUserPassword(value, skipValidation);
  }
}
