import { RootError } from './RootError';

export class InvalidGymIdListElementError extends RootError {
  private constructor() {
    const message = 'All elements in GymIdList must be GymId instances';
    super(message);
    this.name = 'InvalidGymIdListElementError';
  }

  public static create(): InvalidGymIdListElementError {
    return new InvalidGymIdListElementError();
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
