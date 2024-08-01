import { RootError } from './RootError';

export class UndefinedValueError extends RootError {
  constructor(propertyName: string, expectedType: string) {
    const message = `Value constraint violation: '${propertyName}' cannot be undefined. Expected type: ${expectedType}.`;
    super(message);
    this.name = 'UndefinedValueError';
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
