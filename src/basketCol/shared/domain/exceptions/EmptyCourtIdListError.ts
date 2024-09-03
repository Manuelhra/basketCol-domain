import { RootError } from './RootError';

export class EmptyCourtIdListError extends RootError {
  constructor() {
    const message = 'CourtIdList cannot be empty';
    super(message);
    this.name = 'EmptyCourtIdListError';
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
