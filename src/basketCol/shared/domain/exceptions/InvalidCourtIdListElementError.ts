import { RootError } from './RootError';

export class InvalidCourtIdListElementError extends RootError {
  constructor() {
    const message = 'All elements in CourtIdList must be CourtId instances';
    super(message);
    this.name = 'InvalidCourtIdListElementError';
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
