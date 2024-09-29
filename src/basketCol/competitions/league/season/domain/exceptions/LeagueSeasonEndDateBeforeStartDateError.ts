import { RootError } from '../../../../../shared/domain/exceptions/RootError';

export class LeagueSeasonEndDateBeforeStartDateError extends RootError {
  private constructor(private startDate: string, private endDate: string) {
    super('LeagueSeason end date is before start date');
  }

  public static create(startDate: string, endDate: string): LeagueSeasonEndDateBeforeStartDateError {
    return new LeagueSeasonEndDateBeforeStartDateError(startDate, endDate);
  }

  public domainError(): string {
    return 'The league season cannot end before it starts.';
  }

  public override logError(): string {
    return `Attempted to create LeagueSeason with end date ${this.endDate} before start date ${this.startDate}`;
  }
}
