import { ReferencedCourtIdList } from '../../../../shared/domain/value-objects/ReferencedCourtIdList';
import { CourtNotFoundError } from '../exceptions/CourtNotFoundError';
import { CourtsNotFoundError } from '../exceptions/CourtsNotFoundError';
import { ICourtRepository } from '../repository/ICourtRepository';
import { CourtId } from '../value-objects/CourtId';

export class CourtValidationService {
  readonly #courtRepository: ICourtRepository;

  constructor(dependencies: {
    courtRepository: ICourtRepository;
  }) {
    this.#courtRepository = dependencies.courtRepository;
  }

  public async ensureCourtExists(courtId: CourtId): Promise<void> {
    const courtFound = await this.#courtRepository.searchById(courtId);

    if (courtFound === undefined || courtFound === null) {
      throw new CourtNotFoundError(courtId);
    }
  }

  public async ensureCourtsExist<T extends ReferencedCourtIdList>(courtIdList: T): Promise<void> {
    const { allCourtsExist, nonExistentCourtIds } = await this.#courtRepository.areAllCourtsExistingByIds<T>(courtIdList);

    if (allCourtsExist === false && nonExistentCourtIds.length > 0) {
      throw new CourtsNotFoundError(nonExistentCourtIds);
    }
  }
}
