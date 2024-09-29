import { RootError } from './RootError';

export class EmptyCourtIdListError extends RootError {
  private constructor() {
    const message = 'CourtIdList cannot be empty';
    super(message);
    this.name = 'EmptyCourtIdListError';
  }

  public static create(): EmptyCourtIdListError {
    return new EmptyCourtIdListError();
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
