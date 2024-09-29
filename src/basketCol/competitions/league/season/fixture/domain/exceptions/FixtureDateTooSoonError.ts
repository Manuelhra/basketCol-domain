import { RootError } from '../../../../../../shared/domain/exceptions/RootError';

export class FixtureDateTooSoonError extends RootError {
  private constructor(date: string) {
    const message = `Invalid fixture date: '${date}'. The fixture date must be at least 12 hours in the future.`;
    super(message);
    this.name = 'FixtureDateTooSoonError';
  }

  public static create(date: string): FixtureDateTooSoonError {
    return new FixtureDateTooSoonError(date);
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
