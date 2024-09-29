import { RootError } from './RootError';

export class InvalidCourtIdInstanceError extends RootError {
  private constructor() {
    super('The provided value is not a valid instance of CourtId.');
    this.name = 'InvalidCourtIdInstanceError';
  }

  public static create(): InvalidCourtIdInstanceError {
    return new InvalidCourtIdInstanceError();
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
