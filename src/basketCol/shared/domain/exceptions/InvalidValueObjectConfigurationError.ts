import { RootError } from './RootError';

export class InvalidValueObjectConfigurationError extends RootError {
  private constructor() {
    const message = 'Invalid configuration: Cannot allow both null and undefined simultaneously';
    super(message);
    this.name = 'InvalidValueObjectConfigurationError';
  }

  public static create(): InvalidValueObjectConfigurationError {
    return new InvalidValueObjectConfigurationError();
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
