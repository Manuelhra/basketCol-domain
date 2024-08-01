import { RootError } from './RootError';

export class InvalidValueObjectConfigurationError extends RootError {
  constructor() {
    const message = 'Invalid configuration: Cannot allow both null and undefined simultaneously';
    super(message);
    this.name = 'InvalidValueObjectConfigurationError';
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
