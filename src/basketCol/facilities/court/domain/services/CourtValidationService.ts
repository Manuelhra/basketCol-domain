import { CourtNotFoundError } from '../exceptions/CourtNotFoundError';
import { CourtsNotFoundError } from '../exceptions/CourtsNotFoundError';
import { CourtRepository } from '../repository/CourtRepository';
import { CourtId } from '../value-objects/CourtId';
import { CourtIdList } from '../value-objects/CourtIdList';

export class CourtValidationService {
  readonly #courtRepository: CourtRepository;

  constructor(dependencies: {
    courtRepository: CourtRepository;
  }) {
    this.#courtRepository = dependencies.courtRepository;
  }

  public async ensureCourtExists(courtId: CourtId): Promise<void> {
    const courtFound = await this.#courtRepository.searchById(courtId);

    if (courtFound === undefined || courtFound === null) {
      throw new CourtNotFoundError(courtId);
    }
  }

  public async ensureCourtsExist(courtIdList: CourtIdList): Promise<void> {
    const { allCourtsExist, nonExistentCourtIds } = await this.#courtRepository.areAllCourtsExistingByIds(courtIdList);

    if (allCourtsExist === false && nonExistentCourtIds.length > 0) {
      throw new CourtsNotFoundError(nonExistentCourtIds);
    }
  }
}
