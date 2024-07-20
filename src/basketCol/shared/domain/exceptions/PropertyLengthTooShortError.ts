import { RootError } from './RootError';

export class PropertyLengthTooShortError extends RootError {
  constructor(propertyName: string, minLength: number, currentLength: number) {
    const message = `Length constraint violation: '${propertyName}' does not meet minimum length requirement. Required: ${minLength}, Actual: ${currentLength}.`;
    super(message);
    this.name = 'PropertyLengthTooShortError';
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}

