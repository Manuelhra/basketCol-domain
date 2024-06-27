import RootError from './RootError';

class PasswordPolicyViolationError extends RootError {
  constructor(message: string = "The password does not comply with the domain's security policies") {
    super(message);
    this.name = 'PasswordPolicyViolationError';
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}

export default PasswordPolicyViolationError;
