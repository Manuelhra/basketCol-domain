import { BusinessDateService } from '../../../../shared/domain/services/BusinessDateService';
import { IdUniquenessValidatorService } from '../../../../shared/domain/services/IdUniquenessValidatorService';
import { EmailUniquenessValidatorService } from '../../../shared/domain/services/EmailUniquenessValidatorService';
import { SecurePasswordCreationService } from '../../../shared/domain/services/SecurePasswordCreationService';
import { ILeagueFounderUser } from '../../domain/ILeagueFounderUser';
import { LeagueFounderUser } from '../../domain/LeagueFounderUser';
import { ILeagueFounderUserRepository } from '../../domain/repository/ILeagueFounderUserRepository';
import { LeagueFounderUserCreatedAt } from '../../domain/value-objects/LeagueFounderUserCreatedAt';
import { LeagueFounderUserEmail } from '../../domain/value-objects/LeagueFounderUserEmail';
import { LeagueFounderUserId } from '../../domain/value-objects/LeagueFounderUserId';
import { LeagueFounderUserPassword } from '../../domain/value-objects/LeagueFounderUserPassword';
import { LeagueFounderUserUpdatedAt } from '../../domain/value-objects/LeagueFounderUserUpdatedAt';
import { CreateLeagueFounderUserDTO } from '../dto/CreateLeagueFounderUserDTO';

export class CreateLeagueFounderUserUseCase {
  readonly #emailUniquenessValidatorService: EmailUniquenessValidatorService;

  readonly #idUniquenessValidatorService: IdUniquenessValidatorService;

  readonly #securePasswordCreationService: SecurePasswordCreationService;

  readonly #leagueFounderUserRepository: ILeagueFounderUserRepository;

  readonly #businessDateService: BusinessDateService;

  constructor(dependencies: {
    emailUniquenessValidatorService: EmailUniquenessValidatorService
    idUniquenessValidatorService: IdUniquenessValidatorService;
    securePasswordCreationService: SecurePasswordCreationService;
    leagueFounderUserRepository: ILeagueFounderUserRepository;
    businessDateService: BusinessDateService;
  }) {
    this.#emailUniquenessValidatorService = dependencies.emailUniquenessValidatorService;
    this.#idUniquenessValidatorService = dependencies.idUniquenessValidatorService;
    this.#securePasswordCreationService = dependencies.securePasswordCreationService;
    this.#leagueFounderUserRepository = dependencies.leagueFounderUserRepository;
    this.#businessDateService = dependencies.businessDateService;
  }

  public async run(payload: CreateLeagueFounderUserDTO): Promise<void> {
    const {
      id,
      email,
      name,
      biography,
      password,
    } = payload;

    const leagueFounderUserId: LeagueFounderUserId = new LeagueFounderUserId(id);
    const leagueFounderUserEmail: LeagueFounderUserEmail = new LeagueFounderUserEmail({ value: email.value, verified: false });

    await this.#idUniquenessValidatorService.ensureUniqueId<LeagueFounderUserId, ILeagueFounderUser, LeagueFounderUser>(leagueFounderUserId);
    await this.#emailUniquenessValidatorService.ensureUniqueEmail<LeagueFounderUserEmail, ILeagueFounderUser, LeagueFounderUser>(leagueFounderUserEmail);

    const active: boolean = true;
    const leagueFounderUserPassword: LeagueFounderUserPassword = this.#securePasswordCreationService.createFromPlainText<LeagueFounderUserPassword>(password);
    const leagueFounderUserCreatedAt: LeagueFounderUserCreatedAt = this.#businessDateService.getCurrentDate();
    const leagueFounderUserUpdatedAt: LeagueFounderUserUpdatedAt = this.#businessDateService.getCurrentDate();

    const leagueFounderUser: LeagueFounderUser = new LeagueFounderUser(
      leagueFounderUserId.value,
      name,
      biography,
      leagueFounderUserEmail.value,
      leagueFounderUserPassword.value,
      active,
      leagueFounderUserCreatedAt.value,
      leagueFounderUserUpdatedAt.value,
    );

    return this.#leagueFounderUserRepository.save(leagueFounderUser);
  }
}
