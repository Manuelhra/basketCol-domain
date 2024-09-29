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

  public async ensureCourtsExist<T extends ReferencedCourtIdList>(courtIdList: T): Promise<void> {
    const { allCourtsExist, nonExistentCourtIds } = await this.#courtRepository.areAllCourtsExistingByIds<T>(courtIdList);

    if (allCourtsExist === false && nonExistentCourtIds.length > 0) {
      throw CourtsNotFoundError.create(nonExistentCourtIds);
    }
  }
}
