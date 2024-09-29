import { RootError } from '../../../../shared/domain/exceptions/RootError';
import { GymId } from '../value-objects/GymId';

export class GymNotFoundError extends RootError {
  private constructor(gymId: GymId) {
    super(`Gym not found: The gym with ID '${gymId.value}' does not exist in the system.`);

    this.name = 'GymNotFoundError';
  }

  public static create(gymId: GymId): GymNotFoundError {
    return new GymNotFoundError(gymId);
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
