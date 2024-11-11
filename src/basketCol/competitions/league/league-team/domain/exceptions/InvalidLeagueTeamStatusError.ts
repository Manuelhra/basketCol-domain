import { RootError } from '../../../../../shared/domain/exceptions/RootError';

export class InvalidLeagueTeamStatusError extends RootError {
  private constructor(invalidStatus: string, validStatuses: readonly string[]) {
    super(`Invalid fixture game status: "${invalidStatus}". Valid statuses are: ${validStatuses.join(', ')}`);

    this.name = 'InvalidLeagueTeamStatusError';
  }

  public static create(invalidStatus: string, validStatuses: readonly string[]): InvalidLeagueTeamStatusError {
    return new InvalidLeagueTeamStatusError(invalidStatus, validStatuses);
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
