import { RootError } from './RootError';

export class NotIntegerError extends RootError {
  private constructor(
    private readonly propertyName: string,
    private readonly actualValue: number,
  ) {
    super(`Value constraint violation: '${propertyName}' must be an integer. Actual value: ${actualValue}.`);
    this.name = 'NotIntegerError';
  }

  public static create(propertyName: string, actualValue: number): NotIntegerError {
    return new NotIntegerError(propertyName, actualValue);
  }

  public getPropertyName(): string {
    return this.propertyName;
  }

  public getActualValue(): number {
    return this.actualValue;
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
