import { Nullable } from '../../../../shared/domain/Nullable';
import { RefereeUserNotFoundError } from '../exceptions/RefereeUserNotFoundError';
import { RefereeUser } from '../RefereeUser';
import { IRefereeUserRepository } from '../repository/IRefereeUserRepository';
import { RefereeUserId } from '../value-objects/RefereeUserId';

export class RefereeUserValidationService {
  readonly #refereeUserRepository: IRefereeUserRepository;

  constructor(dependencies: {
    refereeUserRepository: IRefereeUserRepository;
  }) {
    this.#refereeUserRepository = dependencies.refereeUserRepository;
  }

  public async ensureRefereeUserExists(refereeUserId: RefereeUserId): Promise<void> {
    const refereeUserFound: Nullable<RefereeUser> = await this.#refereeUserRepository.searchById(refereeUserId);

    if (refereeUserFound === undefined || refereeUserFound === null) {
      throw new RefereeUserNotFoundError(refereeUserId);
    }
  }
}
