import { UserPassword } from '../../../shared/domain/value-objects/UserPassword';

export class RefereeUserPassword extends UserPassword {
  public constructor(value: string) {
    super(value);
  }
}
