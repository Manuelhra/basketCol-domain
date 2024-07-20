import { RootError } from '../../../../shared/domain/exceptions/RootError';

export class PasswordPolicyViolationError extends RootError {
  constructor(message: string = "The password does not comply with the domain's security policies") {
    super(message);
    this.name = 'PasswordPolicyViolationError';
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}

