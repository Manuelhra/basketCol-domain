import RootError from './RootError';

class InvalidUserTypeError extends RootError {
  constructor(type: string) {
    const message = `Invalid user type: '${type}' is not a valid user type in the system.`;
    super(message);
    this.name = 'InvalidUserTypeError';
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}

export default InvalidUserTypeError;
