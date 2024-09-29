import { RootError } from '../../../../shared/domain/exceptions/RootError';
import { LeagueId } from '../value-objects/LeagueId';

export class LeagueNotFoundError extends RootError {
  private constructor(leagueId: LeagueId) {
    const leagueIdValue: string = leagueId.value;
    super(`League not found: The league with ID '${leagueIdValue}' does not exist in the system.`);

    this.name = 'LeagueNotFoundError';
  }

  public static create(leagueId: LeagueId): LeagueNotFoundError {
    return new LeagueNotFoundError(leagueId);
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
