import { RootError } from './RootError';

export class InvalidEnumValueError extends RootError {
  private constructor(propertyName: string, value: string, validValues: readonly string[]) {
    const message = `Invalid value for ${propertyName}: '${value}'. Valid values are: ${validValues.join(', ')}.`;
    super(message);
    this.name = 'InvalidEnumValueError';
  }

  public static create(propertyName: string, value: string, validValues: readonly string[]): InvalidEnumValueError {
    return new InvalidEnumValueError(propertyName, value, validValues);
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
