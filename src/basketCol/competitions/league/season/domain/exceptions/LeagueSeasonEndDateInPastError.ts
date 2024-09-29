import { RootError } from '../../../../../shared/domain/exceptions/RootError';

export class LeagueSeasonEndDateInPastError extends RootError {
  private constructor(private endDate: string, private currentDate: string) {
    super('LeagueSeason end date is in the past');
  }

  public static create(endDate: string, currentDate: string): LeagueSeasonEndDateInPastError {
    return LeagueSeasonEndDateInPastError.create(endDate, currentDate);
  }

  public domainError(): string {
    return 'The league season cannot end in the past.';
  }

  public override logError(): string {
    return `Attempted to create LeagueSeason with end date ${this.endDate} before current date ${this.currentDate}`;
  }
}
