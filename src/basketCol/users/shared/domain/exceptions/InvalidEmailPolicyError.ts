import { RootError } from '../../../../shared/domain/exceptions/RootError';

export class InvalidEmailPolicyError extends RootError {
  constructor(email: string) {
    const message = `The email "${email}" violates the domain policy`;
    super(message);
    this.name = 'InvalidEmailPolicyError';
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
