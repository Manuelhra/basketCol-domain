import RootError from './RootError';

class InvalidEmailPolicyError extends RootError {
  constructor(email: string) {
    const message = `The email "${email}" violates the domain policy`;
    super(message);
    this.name = 'InvalidEmailPolicyError';
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}

export default InvalidEmailPolicyError;
