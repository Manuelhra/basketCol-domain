import { RootError } from './RootError';

export class EmptyGymIdListError extends RootError {
  constructor() {
    const message = 'GymIdList cannot be empty';
    super(message);
    this.name = 'EmptyGymIdListError';
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
