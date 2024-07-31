import { RootError } from '../../../../../../shared/domain/exceptions/RootError';

export class FixtureAlreadyExistsForDateInLeagueSeasonError extends RootError {
  constructor(leagueSeasonId: string, date: string) {
    const message = `A fixture already exists for league season '${leagueSeasonId}' on date '${date}'.`;
    super(message);
    this.name = 'FixtureAlreadyExistsForDateInLeagueSeasonError';
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
