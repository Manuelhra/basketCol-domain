import { RootError } from '../../../../shared/domain/exceptions/RootError';

export class InvalidFGameStatusError extends RootError {
  private constructor(invalidStatus: string, validStatuses: readonly string[]) {
    super(`Invalid fixture game status: "${invalidStatus}". Valid statuses are: ${validStatuses.join(', ')}`);

    this.name = 'InvalidFGameStatusError';
  }

  public static create(invalidStatus: string, validStatuses: readonly string[]): InvalidFGameStatusError {
    return new InvalidFGameStatusError(invalidStatus, validStatuses);
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
