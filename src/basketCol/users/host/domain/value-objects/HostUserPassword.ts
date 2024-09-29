import { UserPassword } from '../../../shared/domain/value-objects/UserPassword';

export class HostUserPassword extends UserPassword {
  private constructor(value: string, skipValidation: boolean = false) {
    super(value, skipValidation);
  }

  public static create(value: string, skipValidation: boolean = false): HostUserPassword {
    return new HostUserPassword(value, skipValidation);
  }
}
