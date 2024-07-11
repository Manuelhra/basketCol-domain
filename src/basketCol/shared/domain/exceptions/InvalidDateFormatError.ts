import RootError from './RootError';

class InvalidDateFormatError extends RootError {
  constructor(value: string, expectedFormat: string) {
    const message = `Invalid date format: '${value}' does not match the required format '${expectedFormat}'.`;
    super(message);

    this.name = 'InvalidDateFormatError';
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}

export default InvalidDateFormatError;
