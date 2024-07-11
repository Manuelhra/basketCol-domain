import RootError from '../../../shared/domain/exceptions/RootError';

class LeagueSeasonInsufficientDurationError extends RootError {
  constructor(private startDate: string, private endDate: string, private minimumDays: number) {
    super('LeagueSeason has insufficient duration');
  }

  domainError(): string {
    return `The league season must last at least ${this.minimumDays} days.`;
  }

  logError(): string {
    return `Attempted to create LeagueSeason with duration less than ${this.minimumDays} days (start: ${this.startDate}, end: ${this.endDate})`;
  }
}

export default LeagueSeasonInsufficientDurationError;
