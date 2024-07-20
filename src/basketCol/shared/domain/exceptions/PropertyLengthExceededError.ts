import { RootError } from './RootError';

export class PropertyLengthExceededError extends RootError {
  constructor(propertyName: string, maxLength: number, currentLength: number) {
    const message = `Length constraint violation: '${propertyName}' exceeds maximum length. Allowed: ${maxLength}, Actual: ${currentLength}.`;
    super(message);
    this.name = 'PropertyLengthExceededError';
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}

