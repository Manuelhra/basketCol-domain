import { IdListValueObject } from '../../../../shared/domain/value-objects/IdListValueObject';
import { CourtNotFoundError } from '../exceptions/CourtNotFoundError';
import { CourtsNotFoundError } from '../exceptions/CourtsNotFoundError';
import { ICourtRepository } from '../repository/ICourtRepository';
import { CourtId } from '../value-objects/CourtId';

type Dependencies = {
  readonly courtRepository: ICourtRepository;
};

export class CourtValidationService {
  readonly #courtRepository: ICourtRepository;

  private constructor(dependencies: Dependencies) {
    this.#courtRepository = dependencies.courtRepository;
  }

  public static create(dependencies: Dependencies): CourtValidationService {
    return new CourtValidationService(dependencies);
  }

  public async ensureCourtExists(courtId: CourtId): Promise<void> {
    const courtFound = await this.#courtRepository.findById(courtId);

    if (courtFound === undefined || courtFound === null) {
      throw CourtNotFoundError.create(courtId);
    }
  }

  public async ensureCourtsExist(courtIdList: IdListValueObject): Promise<void> {
    const courtFoundList = await this.#courtRepository.findAllByIdList(courtIdList);

    if (courtFoundList.length !== courtIdList.value.length) {
      throw CourtsNotFoundError.create(courtIdList.value.map((courtId) => CourtId.create(courtId)));
    }
  }
}
