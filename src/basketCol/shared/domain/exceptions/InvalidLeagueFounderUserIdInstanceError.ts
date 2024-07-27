import { RootError } from './RootError';

export class InvalidLeagueFounderUserIdInstanceError extends RootError {
  constructor() {
    super('Value is not an instance of LeagueFounderUserId');
    this.name = 'InvalidLeagueFounderUserIdInstanceError';
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
