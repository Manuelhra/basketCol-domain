import { RootError } from './RootError';

export class NullValueError extends RootError {
  private constructor(propertyName: string, expectedType: string) {
    const message = `Value constraint violation: '${propertyName}' cannot be null. Expected type: ${expectedType}.`;
    super(message);
    this.name = 'NullValueError';
  }

  public static create(propertyName: string, expectedType: string): NullValueError {
    return new NullValueError(propertyName, expectedType);
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
