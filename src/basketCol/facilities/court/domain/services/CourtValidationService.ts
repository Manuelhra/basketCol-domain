import { ReferencedCourtIdList } from '../../../../shared/domain/value-objects/ReferencedCourtIdList';
import { CourtNotFoundError } from '../exceptions/CourtNotFoundError';
import { CourtsNotFoundError } from '../exceptions/CourtsNotFoundError';
import { ICourtRepository } from '../repository/ICourtRepository';
import { CourtId } from '../value-objects/CourtId';

type Dependencies = {
  courtRepository: ICourtRepository;
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
    const courtFound = await this.#courtRepository.searchById(courtId);

    if (courtFound === undefined || courtFound === null) {
      throw CourtNotFoundError.create(courtId);
    }
  }

  public async ensureCourtsExist(courtIdList: ReferencedCourtIdList): Promise<void> {
    const courtFoundList = await this.#courtRepository.searchByIdList(courtIdList);

    if (courtFoundList.length !== courtIdList.courtIdListAsStrings.length) {
      throw CourtsNotFoundError.create(courtIdList.courtIdListAsStrings.map((courtId) => CourtId.create(courtId)));
    }
  }
}
