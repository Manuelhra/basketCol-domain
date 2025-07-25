import { RootError } from './RootError';

export class MaximumValueExceededError extends RootError {
  private constructor(propertyName: string, maximumValue: number, actualValue: number) {
    const message = `Value constraint violation: '${propertyName}' exceeds maximum allowed value. Maximum: ${maximumValue}, Actual: ${actualValue}.`;
    super(message);
    this.name = 'MaximumValueExceededError';
  }

  public static create(propertyName: string, maximumValue: number, actualValue: number): MaximumValueExceededError {
    return new MaximumValueExceededError(propertyName, maximumValue, actualValue);
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
