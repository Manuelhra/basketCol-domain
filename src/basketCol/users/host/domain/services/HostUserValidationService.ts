import { HostUserNotFoundError } from '../exceptions/HostUserNotFoundError';
import { IHostUserRepository } from '../repository/IHostUserRepository';
import { HostUserId } from '../value-objects/HostUserId';

type Dependencies = {
  hostUserRepository: IHostUserRepository;
};

export class HostUserValidationService {
  readonly #hostUserRepository: IHostUserRepository;

  private constructor(dependencies: Dependencies) {
    this.#hostUserRepository = dependencies.hostUserRepository;
  }

  public static create(dependencies: Dependencies): HostUserValidationService {
    return new HostUserValidationService(dependencies);
  }

  public async ensureHostUserExists(hostUserId: HostUserId): Promise<void> {
    const hostUserFound = await this.#hostUserRepository.searchById(hostUserId);

    if (hostUserFound === undefined || hostUserFound === null) {
      throw HostUserNotFoundError.create(hostUserId);
    }
  }
}
