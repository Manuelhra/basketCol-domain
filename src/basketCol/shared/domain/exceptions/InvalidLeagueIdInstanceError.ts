import { RootError } from './RootError';

export class InvalidLeagueIdInstanceError extends RootError {
  private constructor() {
    const message = 'Value is not an instance of LeagueId';
    super(message);
    this.name = 'InvalidLeagueIdError';
  }

  public static create(): InvalidLeagueIdInstanceError {
    return new InvalidLeagueIdInstanceError();
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
