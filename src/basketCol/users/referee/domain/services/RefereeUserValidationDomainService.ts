import { Nullable } from '../../../../shared/domain/Nullable';
import { RefereeUserNotFoundError } from '../exceptions/RefereeUserNotFoundError';
import { RefereeUser } from '../RefereeUser';
import { IRefereeUserRepository } from '../repository/IRefereeUserRepository';
import { RefereeUserId } from '../value-objects/RefereeUserId';

type Dependencies = {
  readonly refereeUserRepository: IRefereeUserRepository;
};

export class RefereeUserValidationDomainService {
  readonly #refereeUserRepository: IRefereeUserRepository;

  private constructor(dependencies: Dependencies) {
    this.#refereeUserRepository = dependencies.refereeUserRepository;
  }

  public static create(dependencies: Dependencies): RefereeUserValidationDomainService {
    return new RefereeUserValidationDomainService(dependencies);
  }

  public async ensureRefereeUserExists(refereeUserId: RefereeUserId): Promise<void> {
    const refereeUserFound: Nullable<RefereeUser> = await this.#refereeUserRepository.findById(refereeUserId);

    if (refereeUserFound === undefined || refereeUserFound === null) {
      throw RefereeUserNotFoundError.create(refereeUserId);
    }
  }
}
