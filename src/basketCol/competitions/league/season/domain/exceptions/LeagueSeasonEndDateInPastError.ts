import { RootError } from '../../../../../shared/domain/exceptions/RootError';

export class LeagueSeasonEndDateInPastError extends RootError {
  constructor(private endDate: string, private currentDate: string) {
    super('LeagueSeason end date is in the past');
  }

  domainError(): string {
    return 'The league season cannot end in the past.';
  }

  logError(): string {
    return `Attempted to create LeagueSeason with end date ${this.endDate} before current date ${this.currentDate}`;
  }
}
