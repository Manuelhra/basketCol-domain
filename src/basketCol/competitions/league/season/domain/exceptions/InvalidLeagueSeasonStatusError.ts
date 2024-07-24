import { RootError } from '../../../../../shared/domain/exceptions/RootError';

export class InvalidLeagueSeasonStatusError extends RootError {
  constructor(invalidStatus: string, validStatuses: readonly string[]) {
    super(`Invalid league season status: "${invalidStatus}". Valid statuses are: ${validStatuses.join(', ')}`);

    this.name = 'InvalidLeagueSeasonStatusError';
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
