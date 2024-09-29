import { RootError } from '../../../../shared/domain/exceptions/RootError';

export class PasswordPolicyViolationError extends RootError {
  private constructor(message: string = "The password does not comply with the domain's security policies") {
    super(message);
    this.name = 'PasswordPolicyViolationError';
  }

  public static create(message?: string): PasswordPolicyViolationError {
    return new PasswordPolicyViolationError(message);
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
