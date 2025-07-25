import { RootError } from '../../../../shared/domain/exceptions/RootError';
import { GymId } from '../value-objects/GymId';

export class GymsNotFoundError extends RootError {
  private constructor(nonExistentGymIds: GymId[]) {
    super(`Gyms not found: The following gyms with IDs '${nonExistentGymIds.map((id) => id.value).join(', ')}' do not exist in the system.`);

    this.name = 'GymsNotFoundError';
  }

  public static create(nonExistentGymIds: GymId[]): GymsNotFoundError {
    return new GymsNotFoundError(nonExistentGymIds);
  }

  public logError(): string {
    return `${this.name}: ${this.message}`;
  }
}
