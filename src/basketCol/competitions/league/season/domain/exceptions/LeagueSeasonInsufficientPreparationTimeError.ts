import { RootError } from '../../../../../shared/domain/exceptions/RootError';

export class LeagueSeasonInsufficientPreparationTimeError extends RootError {
  private constructor(private startDate: string, private minimumStartDate: string, private minimumDays: number) {
    super('LeagueSeason has insufficient preparation time');
  }

  public static create(startDate: string, minimumStartDate: string, minimumDays: number): LeagueSeasonInsufficientPreparationTimeError {
    return new LeagueSeasonInsufficientPreparationTimeError(startDate, minimumStartDate, minimumDays);
  }

  public domainError(): string {
    return `The league season must start at least ${this.minimumDays} days in the future.`;
  }

  public override logError(): string {
    return `Attempted to create LeagueSeason with start date ${this.startDate}, which is before the minimum start date ${this.minimumStartDate} (${this.minimumDays} days from now)`;
  }
}
