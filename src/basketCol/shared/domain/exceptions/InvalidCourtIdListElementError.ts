import { RootError } from './RootError';

export class InvalidCourtIdListElementError extends RootError {
  private constructor() {
    const message = 'All elements in CourtIdList must be CourtId instances';
    super(message);
    this.name = 'InvalidCourtIdListElementError';
  }

  public static create(): InvalidCourtIdListElementError {
    return new InvalidCourtIdListElementError();
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
