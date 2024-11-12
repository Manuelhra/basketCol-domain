import { HostUserNotFoundError } from '../exceptions/HostUserNotFoundError';
import { IHostUserRepository } from '../repository/IHostUserRepository';
import { HostUserId } from '../value-objects/HostUserId';

type Dependencies = {
  hostUserRepository: IHostUserRepository;
};

export class HostUserValidationDomainService {
  readonly #hostUserRepository: IHostUserRepository;

  private constructor(dependencies: Dependencies) {
    this.#hostUserRepository = dependencies.hostUserRepository;
  }

  public static create(dependencies: Dependencies): HostUserValidationDomainService {
    return new HostUserValidationDomainService(dependencies);
  }

  public async ensureHostUserExists(hostUserId: HostUserId): Promise<void> {
    const hostUserFound = await this.#hostUserRepository.findById(hostUserId);

    if (hostUserFound === undefined || hostUserFound === null) {
      throw HostUserNotFoundError.create(hostUserId);
    }
  }
}
