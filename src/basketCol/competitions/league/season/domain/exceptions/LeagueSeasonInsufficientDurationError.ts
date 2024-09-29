import { RootError } from '../../../../../shared/domain/exceptions/RootError';

export class LeagueSeasonInsufficientDurationError extends RootError {
  private constructor(private startDate: string, private endDate: string, private minimumDays: number) {
    super('LeagueSeason has insufficient duration');
  }

  public static create(startDate: string, endDate: string, minimumDays: number): LeagueSeasonInsufficientDurationError {
    return new LeagueSeasonInsufficientDurationError(startDate, endDate, minimumDays);
  }

  public domainError(): string {
    return `The league season must last at least ${this.minimumDays} days.`;
  }

  public override logError(): string {
    return `Attempted to create LeagueSeason with duration less than ${this.minimumDays} days (start: ${this.startDate}, end: ${this.endDate})`;
  }
}
