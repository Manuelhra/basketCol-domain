import { RootError } from './RootError';

export class InvalidPropertyTypeError extends RootError {
  private constructor(propertyName: string, expectedType: string, receivedType: string) {
    const message = `Invalid type for property '${propertyName}': expected ${expectedType}, but received ${receivedType}.`;
    super(message);
    this.name = 'InvalidPropertyTypeError';
  }

  public static create(propertyName: string, expectedType: string, receivedType: string): InvalidPropertyTypeError {
    return new InvalidPropertyTypeError(propertyName, expectedType, receivedType);
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
