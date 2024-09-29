import { RootError } from '../../../../../shared/domain/exceptions/RootError';

export class LeagueSeasonStartDateInPastError extends RootError {
  private constructor(private startDate: string, private currentDate: string) {
    super('LeagueSeason start date is in the past');
  }

  public static create(startDate: string, currentDate: string): LeagueSeasonStartDateInPastError {
    return new LeagueSeasonStartDateInPastError(startDate, currentDate);
  }

  public domainError(): string {
    return 'The league season cannot start in the past.';
  }

  public override logError(): string {
    return `Attempted to create LeagueSeason with start date ${this.startDate} before current date ${this.currentDate}`;
  }
}
