import { RootError } from './RootError';

export class InvalidDateFormatError extends RootError {
  private constructor(value: string, expectedFormat: string) {
    const message = `Invalid date format: '${value}' does not match the required format '${expectedFormat}'.`;
    super(message);

    this.name = 'InvalidDateFormatError';
  }

  public static create(value: string, expectedFormat: string): InvalidDateFormatError {
    return new InvalidDateFormatError(value, expectedFormat);
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
