import { BusinessDateService } from '../../../shared/domain/services/BusinessDateService';
import { IdUniquenessValidatorService } from '../../../shared/domain/services/IdUniquenessValidatorService';
import { EmailUniquenessValidatorService } from '../../shared/domain/services/EmailUniquenessValidatorService';
import { SecurePasswordCreationService } from '../../shared/domain/services/SecurePasswordCreationService';
import { IPlayerUser } from '../domain/IPlayerUser';
import { PlayerUser } from '../domain/PlayerUser';
import { PlayerUserRepository } from '../domain/repository/PlayerUserRepository';
import { PlayerUserCreatedAt } from '../domain/value-objects/PlayerUserCreatedAt';
import { PlayerUserEmail } from '../domain/value-objects/PlayerUserEmail';
import { PlayerUserId } from '../domain/value-objects/PlayerUserId';
import { PlayerUserPassword } from '../domain/value-objects/PlayerUserPassword';
import { PlayerUserUpdatedAt } from '../domain/value-objects/PlayerUserUpdatedAt';
import { PlayerUserCreatorPayload } from './PlayerUserCreatorPayload';

export class PlayerUserCreator {
  readonly #idUniquenessValidatorService: IdUniquenessValidatorService;

  readonly #emailUniquenessValidatorService: EmailUniquenessValidatorService;

  readonly #securePasswordCreationService: SecurePasswordCreationService;

  readonly #businessDateService: BusinessDateService;

  readonly #playerUserRepository: PlayerUserRepository;

  constructor(dependencies: {
    emailUniquenessValidatorService: EmailUniquenessValidatorService;
    idUniquenessValidatorService: IdUniquenessValidatorService;
    securePasswordCreationService: SecurePasswordCreationService;
    playerUserRepository: PlayerUserRepository;
    businessDateService: BusinessDateService;
  }) {
    this.#emailUniquenessValidatorService = dependencies.emailUniquenessValidatorService;
    this.#idUniquenessValidatorService = dependencies.idUniquenessValidatorService;
    this.#playerUserRepository = dependencies.playerUserRepository;
    this.#securePasswordCreationService = dependencies.securePasswordCreationService;
    this.#playerUserRepository = dependencies.playerUserRepository;
    this.#businessDateService = dependencies.businessDateService;
  }

  public async run(payload: PlayerUserCreatorPayload): Promise<void> {
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
    const playerUserCreatedAt: PlayerUserCreatedAt = this.#businessDateService.getCurrentDate<PlayerUserCreatedAt>();
    const playerUserUpdatedAt: PlayerUserUpdatedAt = this.#businessDateService.getCurrentDate<PlayerUserUpdatedAt>();

    const playerUser: PlayerUser = new PlayerUser(
      playerUserId.getValue(),
      name,
      biography,
      playerUserEmail.getValue(),
      playerUserPassword.getValue(),
      active,
      playerUserCreatedAt.getValue(),
      playerUserUpdatedAt.getValue(),
    );

    return this.#playerUserRepository.save(playerUser);
  }
}
