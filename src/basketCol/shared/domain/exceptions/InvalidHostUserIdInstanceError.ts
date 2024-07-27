import { RootError } from './RootError';

export class InvalidHostUserIdInstanceError extends RootError {
  constructor() {
    const message = 'Value is not an instance of HostUserId';
    super(message);
    this.name = 'InvalidHostUserIdInstanceError';
  }

  logError() {
    return `${this.name}: ${this.message}`;
  }
}
