import { RootError } from './RootError';

export class InvalidCourtIdInstanceError extends RootError {
  constructor() {
    super('The provided value is not a valid instance of CourtId.');
    this.name = 'InvalidCourtIdInstanceError';
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
