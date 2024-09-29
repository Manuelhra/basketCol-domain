import { RootError } from '../../../../shared/domain/exceptions/RootError';

export class InvalidEmailPolicyError extends RootError {
  private constructor(email: string) {
    const message = `The email "${email}" violates the domain policy`;
    super(message);
    this.name = 'InvalidEmailPolicyError';
  }

  public static create(email: string): InvalidEmailPolicyError {
    return new InvalidEmailPolicyError(email);
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
