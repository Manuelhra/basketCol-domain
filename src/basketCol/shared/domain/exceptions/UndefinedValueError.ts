import { RootError } from './RootError';

export class UndefinedValueError extends RootError {
  private constructor(propertyName: string, expectedType: string) {
    const message = `Value constraint violation: '${propertyName}' cannot be undefined. Expected type: ${expectedType}.`;
    super(message);
    this.name = 'UndefinedValueError';
  }

  public static create(propertyName: string, expectedType: string): UndefinedValueError {
    return new UndefinedValueError(propertyName, expectedType);
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
