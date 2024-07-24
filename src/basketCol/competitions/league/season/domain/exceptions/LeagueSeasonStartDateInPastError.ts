import { RootError } from '../../../../../shared/domain/exceptions/RootError';

export class LeagueSeasonStartDateInPastError extends RootError {
  constructor(private startDate: string, private currentDate: string) {
    super('LeagueSeason start date is in the past');
  }

  domainError(): string {
    return 'The league season cannot start in the past.';
  }

  logError(): string {
    return `Attempted to create LeagueSeason with start date ${this.startDate} before current date ${this.currentDate}`;
  }
}
