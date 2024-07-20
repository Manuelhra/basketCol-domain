import { Nullable } from '../../../shared/domain/Nullable';
import BusinessDateService from '../../../shared/domain/services/BusinessDateService';
import SecurePasswordCreationService from '../../shared/domain/services/SecurePasswordCreationService';
import MultipleHostUsersException from '../domain/exceptions/MultipleHostUsersException';
import HostUser from '../domain/HostUser';
import { HostUserRepository } from '../domain/repository/HostUserRepository';
import HostUserCreatedAt from '../domain/value-objects/HostUserCreatedAt';
import HostUserPassword from '../domain/value-objects/HostUserPassword';
import HostUserUpdatedAt from '../domain/value-objects/HostUserUpdatedAt';
import { HostUserCreatorPayload } from './HostUserCreatorPayload';

class HostUserCreator {
  readonly #hostUserRepository: HostUserRepository;

  readonly #securePasswordCreationService: SecurePasswordCreationService;

  readonly #businessDateService: BusinessDateService;

  constructor(dependencies: {
    hostUserRepository: HostUserRepository;
    securePasswordCreationService: SecurePasswordCreationService;
    businessDateService: BusinessDateService;
  }) {
    this.#hostUserRepository = dependencies.hostUserRepository;
    this.#securePasswordCreationService = dependencies.securePasswordCreationService;
    this.#businessDateService = dependencies.businessDateService;
  }

  public async run(payload: HostUserCreatorPayload): Promise<void> {
    const hostUserFound: Nullable<HostUser> = await this.#hostUserRepository.search();

    if (hostUserFound) {
      throw new MultipleHostUsersException();
    }

    const { id, email, password } = payload;
    const hostUserCreatedAt: HostUserCreatedAt = this.#businessDateService.getCurrentDate<HostUserCreatedAt>();
    const hostUserUpdatedAt: HostUserUpdatedAt = this.#businessDateService.getCurrentDate<HostUserUpdatedAt>();

    const hostUser: HostUser = new HostUser(
      id,
      { value: email.value, verified: false },
      this.#securePasswordCreationService.createFromPlainText<HostUserPassword>(password).getValue(),
      true,
      hostUserCreatedAt.getValue(),
      hostUserUpdatedAt.getValue(),
    );

    return this.#hostUserRepository.save(hostUser);
  }
}

export default HostUserCreator;
