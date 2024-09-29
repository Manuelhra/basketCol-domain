import { RootError } from './RootError';

export class InvalidHostUserIdInstanceError extends RootError {
  private constructor() {
    const message = 'Value is not an instance of HostUserId';
    super(message);
    this.name = 'InvalidHostUserIdInstanceError';
  }

  public static create(): InvalidHostUserIdInstanceError {
    return new InvalidHostUserIdInstanceError();
  }

  public override logError() {
    return `${this.name}: ${this.message}`;
  }
}
