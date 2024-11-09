import { RootError } from '../../../../shared/domain/exceptions/RootError';
import { LeagueSeasonId } from '../../../league/season/domain/value-objects/LeagueSeasonId';

export class DateNotWithinLeagueSeasonError extends RootError {
  private constructor(
    leagueSeasonId: LeagueSeasonId,
    date: string,
    startDate: string,
    endDate: string,
  ) {
    const leagueSeasonIdValue: string = leagueSeasonId.value;
    super(`Date '${date}' is not within the league season with ID '${leagueSeasonIdValue}'. The season starts on '${startDate}' and ends on '${endDate}'.`);
    this.name = 'DateNotWithinLeagueSeasonError';
  }

  public static create(
    leagueSeasonId: LeagueSeasonId,
    date: string,
    startDate: string,
    endDate: string,
  ): DateNotWithinLeagueSeasonError {
    return new DateNotWithinLeagueSeasonError(leagueSeasonId, date, startDate, endDate);
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
