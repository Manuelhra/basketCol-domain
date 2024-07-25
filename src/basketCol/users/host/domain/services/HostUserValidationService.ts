import { HostUserNotFoundError } from '../exceptions/HostUserNotFoundError';
import { HostUserRepository } from '../repository/HostUserRepository';
import { HostUserId } from '../value-objects/HostUserId';

export class HostUserValidationService {
  readonly #hostUserRepository: HostUserRepository;

  constructor(dependencies: {
    hostUserRepository: HostUserRepository;
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
