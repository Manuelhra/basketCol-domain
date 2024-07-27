import { RootError } from './RootError';

export class InvalidTeamFounderUserIdInstanceError extends RootError {
  constructor() {
    const message = 'Value is not an instance of TeamFounderUserId';
    super(message);
    this.name = 'InvalidTeamFounderUserIdInstanceError';
  }

  logError() {
    return `${this.name}: ${this.message}`;
  }
}
