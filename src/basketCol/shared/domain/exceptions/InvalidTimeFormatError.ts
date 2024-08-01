import { RootError } from './RootError';

export class InvalidTimeFormatError extends RootError {
  constructor(value: string, expectedFormat: string) {
    const message = `Invalid time format: '${value}' does not match the required format '${expectedFormat}'.`;
    super(message);

    this.name = 'InvalidTimeFormatError';
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
