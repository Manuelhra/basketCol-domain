import { RootError } from './RootError';

export class InvalidLeagueSeasonIdInstanceError extends RootError {
  constructor() {
    super('Value is not an instance of LeagueSeasonId');
    this.name = 'InvalidLeagueSeasonIdInstanceError';
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
