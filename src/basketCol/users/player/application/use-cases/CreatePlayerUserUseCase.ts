import { BusinessDateService } from '../../../../shared/domain/services/BusinessDateService';
import { IdUniquenessValidatorService } from '../../../../shared/domain/services/IdUniquenessValidatorService';
import { EmailUniquenessValidatorService } from '../../../shared/domain/services/EmailUniquenessValidatorService';
import { SecurePasswordCreationService } from '../../../shared/domain/services/SecurePasswordCreationService';
import { IPlayerUser } from '../../domain/IPlayerUser';
import { PlayerUser } from '../../domain/PlayerUser';
import { IPlayerUserRepository } from '../../domain/repository/IPlayerUserRepository';
import { PlayerUserCreatedAt } from '../../domain/value-objects/PlayerUserCreatedAt';
import { PlayerUserEmail } from '../../domain/value-objects/PlayerUserEmail';
import { PlayerUserId } from '../../domain/value-objects/PlayerUserId';
import { PlayerUserPassword } from '../../domain/value-objects/PlayerUserPassword';
import { PlayerUserUpdatedAt } from '../../domain/value-objects/PlayerUserUpdatedAt';
import { CreatePlayerUserDTO } from '../dto/CreatePlayerUserDTO';

export class CreatePlayerUserUseCase {
  readonly #idUniquenessValidatorService: IdUniquenessValidatorService;

  readonly #emailUniquenessValidatorService: EmailUniquenessValidatorService;

  readonly #securePasswordCreationService: SecurePasswordCreationService;

  readonly #businessDateService: BusinessDateService;

  readonly #playerUserRepository: IPlayerUserRepository;

  constructor(dependencies: {
    emailUniquenessValidatorService: EmailUniquenessValidatorService;
    idUniquenessValidatorService: IdUniquenessValidatorService;
    securePasswordCreationService: SecurePasswordCreationService;
    playerUserRepository: IPlayerUserRepository;
    businessDateService: BusinessDateService;
  }) {
    this.#emailUniquenessValidatorService = dependencies.emailUniquenessValidatorService;
    this.#idUniquenessValidatorService = dependencies.idUniquenessValidatorService;
    this.#playerUserRepository = dependencies.playerUserRepository;
    this.#securePasswordCreationService = dependencies.securePasswordCreationService;
    this.#playerUserRepository = dependencies.playerUserRepository;
    this.#businessDateService = dependencies.businessDateService;
  }

  public async run(payload: CreatePlayerUserDTO): Promise<void> {
    const {
      id,
      name,
      biography,
      email,
      password,
    } = payload;

    const playerUserId: PlayerUserId = new PlayerUserId(id);
    const playerUserEmail: PlayerUserEmail = new PlayerUserEmail({ value: email.value, verified: false });

    await this.#idUniquenessValidatorService.ensureUniqueId<PlayerUserId, IPlayerUser, PlayerUser>(playerUserId);
    await this.#emailUniquenessValidatorService.ensureUniqueEmail<PlayerUserEmail, IPlayerUser, PlayerUser>(playerUserEmail);

    const active: boolean = true;
    const playerUserPassword: PlayerUserPassword = this.#securePasswordCreationService.createFromPlainText<PlayerUserPassword>(password);
    const playerUserCreatedAt: PlayerUserCreatedAt = this.#businessDateService.getCurrentDate();
    const playerUserUpdatedAt: PlayerUserUpdatedAt = this.#businessDateService.getCurrentDate();

    const playerUser: PlayerUser = new PlayerUser(
      playerUserId.value,
      name,
      biography,
      playerUserEmail.value,
      playerUserPassword.value,
      active,
      playerUserCreatedAt.value,
      playerUserUpdatedAt.value,
    );

    return this.#playerUserRepository.save(playerUser);
  }
}
