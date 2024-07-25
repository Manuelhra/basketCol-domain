import { UserPassword } from '../../../shared/domain/value-objects/UserPassword';

export class HostUserPassword extends UserPassword {
  public constructor(value: string) {
    super(value);
  }
}
