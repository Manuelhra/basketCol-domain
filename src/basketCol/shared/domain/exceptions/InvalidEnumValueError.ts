import { RootError } from './RootError';

export class InvalidEnumValueError extends RootError {
  constructor(propertyName: string, value: string, validValues: readonly string[]) {
    const message = `Invalid value for ${propertyName}: '${value}'. Valid values are: ${validValues.join(', ')}.`;
    super(message);
    this.name = 'InvalidEnumValueError';
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
