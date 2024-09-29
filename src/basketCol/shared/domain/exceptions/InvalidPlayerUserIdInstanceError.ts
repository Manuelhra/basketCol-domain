import { RootError } from './RootError';

export class InvalidPlayerUserIdInstanceError extends RootError {
  private constructor() {
    super('Value is not an instance of PlayerUserId');
    this.name = 'InvalidPlayerUserIdInstanceError';
  }

  public static create(): InvalidPlayerUserIdInstanceError {
    return new InvalidPlayerUserIdInstanceError();
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
