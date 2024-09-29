import { UserPassword } from '../../../shared/domain/value-objects/UserPassword';

export class RefereeUserPassword extends UserPassword {
  private constructor(value: string, skipValidation: boolean = false) {
    super(value, skipValidation);
  }

  public static create(value: string, skipValidation: boolean = false): RefereeUserPassword {
    return new RefereeUserPassword(value, skipValidation);
  }
}
