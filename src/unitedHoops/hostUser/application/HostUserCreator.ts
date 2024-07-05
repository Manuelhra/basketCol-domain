import { Nullable } from '../../shared/domain/Nullable';
import SecurePasswordCreationService from '../../shared/domain/services/SecurePasswordCreationService';
import HostUser from '../domain/HostUser';
import MultipleHostUsersException from '../domain/exceptions/MultipleHostUsersException';
import { HostUserRepository } from '../domain/repository/HostUserRepository';
import HostUserPassword from '../domain/value-objects/HostUserPassword';
import { HostUserCreatorPayload } from './HostUserCreatorPayload';

class HostUserCreator {
  readonly #hostUserRepository: HostUserRepository;

  readonly #securePasswordCreationService: SecurePasswordCreationService;

  constructor(dependencies: {
    hostUserRepository: HostUserRepository;
    securePasswordCreationService: SecurePasswordCreationService;
  }) {
    this.#hostUserRepository = dependencies.hostUserRepository;
    this.#securePasswordCreationService = dependencies.securePasswordCreationService;
  }

  public async run(payload: HostUserCreatorPayload): Promise<void> {
    const hostUserFound: Nullable<HostUser> = await this.#hostUserRepository.search();

    if (hostUserFound) {
      throw new MultipleHostUsersException();
    }

    const { id, email, password } = payload;
    const hostUser: HostUser = new HostUser(
      id,
      { value: email.value, verified: false },
      this.#securePasswordCreationService.createFromPlainText<HostUserPassword>(password).getValue(),
      true,
    );

    return this.#hostUserRepository.save(hostUser);
  }
}

export default HostUserCreator;
