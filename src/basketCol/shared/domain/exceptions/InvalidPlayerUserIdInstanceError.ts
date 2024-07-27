import { RootError } from './RootError';

export class InvalidPlayerUserIdInstanceError extends RootError {
  constructor() {
    super('Value is not an instance of PlayerUserId');
    this.name = 'InvalidPlayerUserIdInstanceError';
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
