import { RootError } from './RootError';

export class InvalidLeagueSeasonIdInstanceError extends RootError {
  private constructor() {
    super('Value is not an instance of LeagueSeasonId');
    this.name = 'InvalidLeagueSeasonIdInstanceError';
  }

  public static create(): InvalidLeagueSeasonIdInstanceError {
    return new InvalidLeagueSeasonIdInstanceError();
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
