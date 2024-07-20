import { RootError } from '../../../../../../shared/domain/exceptions/RootError';

export class MaximumValueExceededError extends RootError {
  constructor(propertyName: string, maximumValue: number, actualValue: number) {
    const message = `Value constraint violation: '${propertyName}' exceeds maximum allowed value. Maximum: ${maximumValue}, Actual: ${actualValue}.`;
    super(message);
    this.name = 'MaximumValueExceededError';
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}

