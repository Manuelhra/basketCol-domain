import { RootError } from './RootError';

export class InvalidLeagueIdInstanceError extends RootError {
  constructor() {
    const message = 'Value is not an instance of LeagueId';
    super(message);
    this.name = 'InvalidLeagueIdError';
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
