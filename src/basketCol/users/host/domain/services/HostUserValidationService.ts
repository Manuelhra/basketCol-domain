import { HostUserNotFoundError } from '../exceptions/HostUserNotFoundError';
import { IHostUserRepository } from '../repository/IHostUserRepository';
import { HostUserId } from '../value-objects/HostUserId';

export class HostUserValidationService {
  readonly #hostUserRepository: IHostUserRepository;

  constructor(dependencies: {
    hostUserRepository: IHostUserRepository;
  }) {
    this.#hostUserRepository = dependencies.hostUserRepository;
  }

  public async ensureHostUserExists(hostUserId: HostUserId): Promise<void> {
    const hostUserFound = await this.#hostUserRepository.searchById(hostUserId);

    if (hostUserFound === undefined || hostUserFound === null) {
      throw new HostUserNotFoundError(hostUserId);
    }
  }
}
