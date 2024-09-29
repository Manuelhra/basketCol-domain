import { RootError } from './RootError';

export class MinimumValueViolationError extends RootError {
  private constructor(propertyName: string, minimumValue: number, actualValue: number) {
    const message = `Value constraint violation: '${propertyName}' is below minimum allowed value. Minimum: ${minimumValue}, Actual: ${actualValue}.`;
    super(message);
    this.name = 'MinimumValueViolationError';
  }

  public static create(propertyName: string, minimumValue: number, actualValue: number): MinimumValueViolationError {
    return new MinimumValueViolationError(propertyName, minimumValue, actualValue);
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
