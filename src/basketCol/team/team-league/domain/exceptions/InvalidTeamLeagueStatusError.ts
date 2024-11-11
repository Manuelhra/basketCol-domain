import { RootError } from '../../../../shared/domain/exceptions/RootError';

export class InvalidTeamLeagueStatusError extends RootError {
  private constructor(invalidStatus: string, validStatuses: readonly string[]) {
    super(`Invalid fixture game status: "${invalidStatus}". Valid statuses are: ${validStatuses.join(', ')}`);

    this.name = 'InvalidTeamLeagueStatusError';
  }

  public static create(invalidStatus: string, validStatuses: readonly string[]): InvalidTeamLeagueStatusError {
    return new InvalidTeamLeagueStatusError(invalidStatus, validStatuses);
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
