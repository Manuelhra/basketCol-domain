import { RootError } from './RootError';

export class InvalidTeamIdInstanceError extends RootError {
  private constructor() {
    super('Value is not an instance of TeamId');
    this.name = 'InvalidTeamIdInstanceError';
  }

  public static create(): InvalidTeamIdInstanceError {
    return new InvalidTeamIdInstanceError();
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
