import { RootError } from './RootError';

export class InvalidMinutesDurationError extends RootError {
  constructor(private readonly invalidValue: number) {
    super(`Invalid duration value in minutes: ${invalidValue}. Duration must be a non-negative integer.`);
    this.name = 'InvalidMinutesDurationError';
  }

  public getInvalidValue(): number {
    return this.invalidValue;
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
