import { RootError } from './RootError';

export class InvalidRefereeUserIdInstanceError extends RootError {
  constructor() {
    const message = 'Value is not an instance of RefereeUserId';
    super(message);
    this.name = 'InvalidRefereeUserIdInstanceError';
  }

  public override logError() {
    return `${this.name}: ${this.message}`;
  }
}
