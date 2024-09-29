import { RootError } from './RootError';

export class InvalidRefereeUserIdInstanceError extends RootError {
  private constructor() {
    const message = 'Value is not an instance of RefereeUserId';
    super(message);
    this.name = 'InvalidRefereeUserIdInstanceError';
  }

  public static create(): InvalidRefereeUserIdInstanceError {
    return new InvalidRefereeUserIdInstanceError();
  }

  public override logError() {
    return `${this.name}: ${this.message}`;
  }
}
