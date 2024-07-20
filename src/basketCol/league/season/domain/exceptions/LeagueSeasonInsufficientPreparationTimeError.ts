import { RootError } from '../../../../shared/domain/exceptions/RootError';

export class LeagueSeasonInsufficientPreparationTimeError extends RootError {
  constructor(private startDate: string, private minimumStartDate: string, private minimumDays: number) {
    super('LeagueSeason has insufficient preparation time');
  }

  domainError(): string {
    return `The league season must start at least ${this.minimumDays} days in the future.`;
  }

  logError(): string {
    return `Attempted to create LeagueSeason with start date ${this.startDate}, which is before the minimum start date ${this.minimumStartDate} (${this.minimumDays} days from now)`;
  }
}

