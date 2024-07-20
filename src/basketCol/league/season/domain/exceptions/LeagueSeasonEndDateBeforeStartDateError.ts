import { RootError } from '../../../../shared/domain/exceptions/RootError';

export class LeagueSeasonEndDateBeforeStartDateError extends RootError {
  constructor(private startDate: string, private endDate: string) {
    super('LeagueSeason end date is before start date');
  }

  domainError(): string {
    return 'The league season cannot end before it starts.';
  }

  logError(): string {
    return `Attempted to create LeagueSeason with end date ${this.endDate} before start date ${this.startDate}`;
  }
}

