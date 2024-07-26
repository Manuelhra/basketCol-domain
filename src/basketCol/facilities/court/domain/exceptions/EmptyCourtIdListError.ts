import { RootError } from '../../../../shared/domain/exceptions/RootError';

export class EmptyCourtIdListError extends RootError {
  constructor() {
    const message = 'CourtIdList cannot be empty';
    super(message);
    this.name = 'EmptyCourtIdListError';
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
