import { RootError } from './RootError';

export class EmptyGymIdListError extends RootError {
  private constructor() {
    const message = 'GymIdList cannot be empty';
    super(message);
    this.name = 'EmptyGymIdListError';
  }

  public static create(): EmptyGymIdListError {
    return new EmptyGymIdListError();
  }

  public override logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
