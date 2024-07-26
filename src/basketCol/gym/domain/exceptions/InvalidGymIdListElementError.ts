import { RootError } from '../../../shared/domain/exceptions/RootError';

export class InvalidGymIdListElementError extends RootError {
  constructor() {
    const message = 'All elements in GymIdList must be GymId instances';
    super(message);
    this.name = 'InvalidGymIdListElementError';
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
