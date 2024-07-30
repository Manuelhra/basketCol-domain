import { Nullable } from '../../../../shared/domain/Nullable';
import { RefereeUserNotFoundError } from '../exceptions/RefereeUserNotFoundError';
import { RefereeUser } from '../RefereeUser';
import { RefereeUserRepository } from '../repository/RefereeUserRepository';
import { RefereeUserId } from '../value-objects/RefereeUserId';

export class RefereeUserValidationService {
  readonly #refereeUserRepository: RefereeUserRepository;

  constructor(dependencies: {
    refereeUserRepository: RefereeUserRepository;
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
