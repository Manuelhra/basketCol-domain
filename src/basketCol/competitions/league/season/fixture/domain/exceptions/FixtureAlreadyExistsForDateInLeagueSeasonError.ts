import { RootError } from '../../../../../../shared/domain/exceptions/RootError';

export class FixtureAlreadyExistsForDateInLeagueSeasonError extends RootError {
  private constructor(leagueSeasonId: string, date: string) {
    const message = `A fixture already exists for league season '${leagueSeasonId}' on date '${date}'.`;
    super(message);
    this.name = 'FixtureAlreadyExistsForDateInLeagueSeasonError';
  }

  public static create(leagueSeasonId: string, date: string): FixtureAlreadyExistsForDateInLeagueSeasonError {
    return new FixtureAlreadyExistsForDateInLeagueSeasonError(leagueSeasonId, date);
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
