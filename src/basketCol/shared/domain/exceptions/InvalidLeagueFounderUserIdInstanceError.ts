import { RootError } from './RootError';

export class InvalidLeagueFounderUserIdInstanceError extends RootError {
  private constructor() {
    super('Value is not an instance of LeagueFounderUserId');
    this.name = 'InvalidLeagueFounderUserIdInstanceError';
  }

  public static create(): InvalidLeagueFounderUserIdInstanceError {
    return new InvalidLeagueFounderUserIdInstanceError();
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
