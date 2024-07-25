import { RootError } from '../../../../../shared/domain/exceptions/RootError';
import { LeagueSeasonId } from '../value-objects/LeagueSeasonId';

export class LeagueSeasonNotFoundError extends RootError {
  constructor(leagueSeasonId: LeagueSeasonId) {
    const leagueSeasonIdValue: string = leagueSeasonId.value;
    super(`League season not found: The league season with ID '${leagueSeasonIdValue}' does not exist in the system.`);

    this.name = 'LeagueSeasonNotFoundError';
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
