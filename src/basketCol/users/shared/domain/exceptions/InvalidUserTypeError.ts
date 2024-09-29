import { RootError } from '../../../../shared/domain/exceptions/RootError';

export class InvalidUserTypeError extends RootError {
  private constructor(type: string) {
    const message = `Invalid user type: '${type}' is not a valid user type in the system.`;
    super(message);
    this.name = 'InvalidUserTypeError';
  }

  public static create(type: string): InvalidUserTypeError {
    return new InvalidUserTypeError(type);
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
