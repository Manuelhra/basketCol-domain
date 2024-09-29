import { RootError } from '../../../../../shared/domain/exceptions/RootError';

export class InvalidLeagueSeasonStatusError extends RootError {
  private constructor(invalidStatus: string, validStatuses: readonly string[]) {
    super(`Invalid league season status: "${invalidStatus}". Valid statuses are: ${validStatuses.join(', ')}`);

    this.name = 'InvalidLeagueSeasonStatusError';
  }

  public static create(invalidStatus: string, validStatuses: readonly string[]): InvalidLeagueSeasonStatusError {
    return new InvalidLeagueSeasonStatusError(invalidStatus, validStatuses);
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
