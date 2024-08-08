import { Nullable } from '../../../../shared/domain/Nullable';
import { BusinessDateService } from '../../../../shared/domain/services/BusinessDateService';
import { SecurePasswordCreationService } from '../../../shared/domain/services/SecurePasswordCreationService';
import { MultipleHostUsersException } from '../../domain/exceptions/MultipleHostUsersException';
import { HostUser } from '../../domain/HostUser';
import { IHostUserRepository } from '../../domain/repository/IHostUserRepository';
import { HostUserCreatedAt } from '../../domain/value-objects/HostUserCreatedAt';
import { HostUserPassword } from '../../domain/value-objects/HostUserPassword';
import { HostUserUpdatedAt } from '../../domain/value-objects/HostUserUpdatedAt';
import { CreateHostUserDTO } from '../dto/CreateHostUserDTO';

export class CreateHostUserUseCase {
  readonly #hostUserRepository: IHostUserRepository;

  readonly #securePasswordCreationService: SecurePasswordCreationService;

  readonly #businessDateService: BusinessDateService;

  constructor(dependencies: {
    hostUserRepository: IHostUserRepository;
    securePasswordCreationService: SecurePasswordCreationService;
    businessDateService: BusinessDateService;
  }) {
    this.#hostUserRepository = dependencies.hostUserRepository;
    this.#securePasswordCreationService = dependencies.securePasswordCreationService;
    this.#businessDateService = dependencies.businessDateService;
  }

  public async execute(payload: CreateHostUserDTO): Promise<void> {
    const hostUserFound: Nullable<HostUser> = await this.#hostUserRepository.search();

    if (hostUserFound) {
      throw new MultipleHostUsersException();
    }

    const {
      id,
      name,
      biography,
      email,
      password,
    } = payload;

    const active: boolean = true;
    const hostUserPassword: HostUserPassword = this.#securePasswordCreationService.createFromPlainText<HostUserPassword>(password);
    const hostUserCreatedAt: HostUserCreatedAt = this.#businessDateService.getCurrentDate();
    const hostUserUpdatedAt: HostUserUpdatedAt = this.#businessDateService.getCurrentDate();

    const hostUser: HostUser = new HostUser(
      id,
      name,
      biography,
      { value: email.value, verified: false },
      hostUserPassword.value,
      active,
      hostUserCreatedAt.value,
      hostUserUpdatedAt.value,
    );

    return this.#hostUserRepository.save(hostUser);
  }
}
