import { RootError } from './RootError';

export class InvalidGenderError extends RootError {
  private constructor(invalidValue: string, validValues: string[]) {
    const message = `Gender constraint violation: '${invalidValue}' is not a valid gender. Valid values are: [${validValues.join(', ')}].`;
    super(message);
    this.name = 'InvalidGenderError';
  }

  public static create(invalidValue: string, validValues: string[]): InvalidGenderError {
    return new InvalidGenderError(invalidValue, validValues);
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
