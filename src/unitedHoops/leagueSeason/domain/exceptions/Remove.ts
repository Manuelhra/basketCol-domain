// LeagueSeasonExceptions.ts

export abstract class LeagueSeasonDomainException extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }

  abstract domainError(): string;
  abstract logError(): string;
}

export class LeagueSeasonStartDateInPastDomainException extends LeagueSeasonDomainException {
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

export class LeagueSeasonEndDateInPastDomainException extends LeagueSeasonDomainException {
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

export class LeagueSeasonInsufficientPreparationTimeDomainException extends LeagueSeasonDomainException {
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

export class LeagueSeasonEndDateBeforeStartDateDomainException extends LeagueSeasonDomainException {
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

export class LeagueSeasonInsufficientDurationDomainException extends LeagueSeasonDomainException {
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
