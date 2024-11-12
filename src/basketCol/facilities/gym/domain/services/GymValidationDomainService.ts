import { IdListValueObject } from '../../../../shared/domain/value-objects/IdListValueObject';
import { GymNotFoundError } from '../exceptions/GymNotFoundError';
import { GymsNotFoundError } from '../exceptions/GymsNotFoundError';
import { IGymRepository } from '../repository/IGymRepository';
import { GymId } from '../value-objects/GymId';

type Dependencies = {
  gymRepository: IGymRepository;
};

export class GymValidationDomainService {
  readonly #gymRepository: IGymRepository;

  private constructor(dependencies: Dependencies) {
    this.#gymRepository = dependencies.gymRepository;
  }

  public static create(dependencies: Dependencies): GymValidationDomainService {
    return new GymValidationDomainService(dependencies);
  }

  public async ensureGymExists(gymId: GymId): Promise<void> {
    const gymFound = await this.#gymRepository.findById(gymId);

    if (gymFound === undefined || gymFound === null) {
      throw GymNotFoundError.create(gymId);
    }
  }

  public async ensureGymsExists(gymIdList: IdListValueObject): Promise<void> {
    const gymFoundList = await this.#gymRepository.findAllByIdList(gymIdList);

    if (gymFoundList.length !== gymIdList.value.length) {
      throw GymsNotFoundError.create(gymIdList.value.map((gymId) => GymId.create(gymId)));
    }
  }
}
