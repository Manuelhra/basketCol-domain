import { RootError } from '../../../../../../shared/domain/exceptions/RootError';

export class MinimumValueViolationError extends RootError {
  constructor(propertyName: string, minimumValue: number, actualValue: number) {
    const message = `Value constraint violation: '${propertyName}' is below minimum allowed value. Minimum: ${minimumValue}, Actual: ${actualValue}.`;
    super(message);
    this.name = 'MinimumValueViolationError';
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}

