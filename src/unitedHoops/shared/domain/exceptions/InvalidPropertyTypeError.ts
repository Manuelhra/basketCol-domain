import RootError from './RootError';

class InvalidPropertyTypeError extends RootError {
  constructor(propertyName: string, expectedType: string, receivedType: string) {
    const message = `Invalid type for property '${propertyName}': expected ${expectedType}, but received ${receivedType}.`;
    super(message);
    this.name = 'InvalidPropertyTypeError';
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}

export default InvalidPropertyTypeError;
