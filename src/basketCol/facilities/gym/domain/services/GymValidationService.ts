import { ReferencedGymIdList } from '../../../../shared/domain/value-objects/ReferencedGymIdList';
import { GymNotFoundError } from '../exceptions/GymNotFoundError';
import { GymsNotFoundError } from '../exceptions/GymsNotFoundError';
import { GymRepository } from '../repository/GymRepository';
import { GymId } from '../value-objects/GymId';

export class GymValidationService {
  readonly #gymRepository: GymRepository;

  constructor(dependencies: {
    gymRepository: GymRepository;
  }) {
    this.#gymRepository = dependencies.gymRepository;
  }

  public async ensureGymExists(gymId: GymId): Promise<void> {
    const gymFound = await this.#gymRepository.searchById(gymId);

    if (gymFound === undefined || gymFound === null) {
      throw new GymNotFoundError(gymId);
    }
  }

  public async ensureGymsExist<T extends ReferencedGymIdList>(gymIdList: T): Promise<void> {
    const { allGymsExist, nonExistentGymIds } = await this.#gymRepository.areAllGymsExistingByIds<T>(gymIdList);

    if (allGymsExist === false && nonExistentGymIds.length > 0) {
      throw new GymsNotFoundError(nonExistentGymIds);
    }
  }
}
