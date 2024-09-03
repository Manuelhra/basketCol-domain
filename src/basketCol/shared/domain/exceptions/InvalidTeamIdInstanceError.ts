import { RootError } from './RootError';

export class InvalidTeamIdInstanceError extends RootError {
  constructor() {
    super('Value is not an instance of TeamId');
    this.name = 'InvalidTeamIdInstanceError';
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
