import { ReferencedGymIdList } from '../../../../shared/domain/value-objects/ReferencedGymIdList';
import { GymNotFoundError } from '../exceptions/GymNotFoundError';
import { GymsNotFoundError } from '../exceptions/GymsNotFoundError';
import { IGymRepository } from '../repository/IGymRepository';
import { GymId } from '../value-objects/GymId';

type Dependencies = {
  gymRepository: IGymRepository;
};

export class GymValidationService {
  readonly #gymRepository: IGymRepository;

  private constructor(dependencies: Dependencies) {
    this.#gymRepository = dependencies.gymRepository;
  }

  public static create(dependencies: Dependencies): GymValidationService {
    return new GymValidationService(dependencies);
  }

  public async ensureGymExists(gymId: GymId): Promise<void> {
    const gymFound = await this.#gymRepository.searchById(gymId);

    if (gymFound === undefined || gymFound === null) {
      throw GymNotFoundError.create(gymId);
    }
  }

  public async ensureGymsExist<T extends ReferencedGymIdList>(gymIdList: T): Promise<void> {
    const { allGymsExist, nonExistentGymIds } = await this.#gymRepository.areAllGymsExistingByIds<T>(gymIdList);

    if (allGymsExist === false && nonExistentGymIds.length > 0) {
      throw GymsNotFoundError.create(nonExistentGymIds);
    }
  }
}
