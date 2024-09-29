import { Nullable } from '../../../../shared/domain/Nullable';
import { RefereeUserNotFoundError } from '../exceptions/RefereeUserNotFoundError';
import { RefereeUser } from '../RefereeUser';
import { IRefereeUserRepository } from '../repository/IRefereeUserRepository';
import { RefereeUserId } from '../value-objects/RefereeUserId';

type Dependencies = {
  refereeUserRepository: IRefereeUserRepository;
};

export class RefereeUserValidationService {
  readonly #refereeUserRepository: IRefereeUserRepository;

  private constructor(dependencies: Dependencies) {
    this.#refereeUserRepository = dependencies.refereeUserRepository;
  }

  public static create(dependencies: Dependencies): RefereeUserValidationService {
    return new RefereeUserValidationService(dependencies);
  }

  public async ensureRefereeUserExists(refereeUserId: RefereeUserId): Promise<void> {
    const refereeUserFound: Nullable<RefereeUser> = await this.#refereeUserRepository.searchById(refereeUserId);

    if (refereeUserFound === undefined || refereeUserFound === null) {
      throw RefereeUserNotFoundError.create(refereeUserId);
    }
  }
}
