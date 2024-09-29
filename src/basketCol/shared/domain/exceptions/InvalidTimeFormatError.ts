import { RootError } from './RootError';

export class InvalidTimeFormatError extends RootError {
  private constructor(value: string, expectedFormat: string) {
    const message = `Invalid time format: '${value}' does not match the required format '${expectedFormat}'.`;
    super(message);

    this.name = 'InvalidTimeFormatError';
  }

  public static create(value: string, expectedFormat: string): InvalidTimeFormatError {
    return new InvalidTimeFormatError(value, expectedFormat);
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
