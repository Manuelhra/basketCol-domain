import { RootError } from './RootError';

export class InvalidTeamFounderUserIdInstanceError extends RootError {
  private constructor() {
    const message = 'Value is not an instance of TeamFounderUserId';
    super(message);
    this.name = 'InvalidTeamFounderUserIdInstanceError';
  }

  public static create(): InvalidTeamFounderUserIdInstanceError {
    return new InvalidTeamFounderUserIdInstanceError();
  }

  public override logError() {
    return `${this.name}: ${this.message}`;
  }
}
