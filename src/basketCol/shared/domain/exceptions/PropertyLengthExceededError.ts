import { RootError } from './RootError';

export class PropertyLengthExceededError extends RootError {
  private constructor(propertyName: string, maxLength: number, currentLength: number) {
    const message = `Length constraint violation: '${propertyName}' exceeds maximum length. Allowed: ${maxLength}, Actual: ${currentLength}.`;
    super(message);
    this.name = 'PropertyLengthExceededError';
  }

  public static create(propertyName: string, maxLength: number, currentLength: number): PropertyLengthExceededError {
    return new PropertyLengthExceededError(propertyName, maxLength, currentLength);
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
