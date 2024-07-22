import { BusinessDateService } from '../../../shared/domain/services/BusinessDateService';
import { IdUniquenessValidatorService } from '../../../shared/domain/services/IdUniquenessValidatorService';
import { EmailUniquenessValidatorService } from '../../shared/domain/services/EmailUniquenessValidatorService';
import { SecurePasswordCreationService } from '../../shared/domain/services/SecurePasswordCreationService';
import { ILeagueFounderUser } from '../domain/ILeagueFounderUser';
import { LeagueFounderUser } from '../domain/LeagueFounderUser';
import { LeagueFounderUserRepository } from '../domain/repository/LeagueFounderUserRepository';
import { LeagueFounderUserCreatedAt } from '../domain/value-objects/LeagueFounderUserCreatedAt';
import { LeagueFounderUserEmail } from '../domain/value-objects/LeagueFounderUserEmail';
import { LeagueFounderUserId } from '../domain/value-objects/LeagueFounderUserId';
import { LeagueFounderUserPassword } from '../domain/value-objects/LeagueFounderUserPassword';
import { LeagueFounderUserUpdatedAt } from '../domain/value-objects/LeagueFounderUserUpdatedAt';
import { LeagueFounderUserCreatorPayload } from './LeagueFounderUserCreatorPayload';

export class LeagueFounderUserCreator {
  readonly #emailUniquenessValidatorService: EmailUniquenessValidatorService;

  readonly #idUniquenessValidatorService: IdUniquenessValidatorService;

  readonly #securePasswordCreationService: SecurePasswordCreationService;

  readonly #leagueFounderUserRepository: LeagueFounderUserRepository;

  readonly #businessDateService: BusinessDateService;

  constructor(dependencies: {
    emailUniquenessValidatorService: EmailUniquenessValidatorService
    idUniquenessValidatorService: IdUniquenessValidatorService;
    securePasswordCreationService: SecurePasswordCreationService;
    leagueFounderUserRepository: LeagueFounderUserRepository;
    businessDateService: BusinessDateService;
  }) {
    this.#emailUniquenessValidatorService = dependencies.emailUniquenessValidatorService;
    this.#idUniquenessValidatorService = dependencies.idUniquenessValidatorService;
    this.#securePasswordCreationService = dependencies.securePasswordCreationService;
    this.#leagueFounderUserRepository = dependencies.leagueFounderUserRepository;
    this.#businessDateService = dependencies.businessDateService;
  }

  public async run(leagueFounderUserCreatorPayload: LeagueFounderUserCreatorPayload): Promise<void> {
    const {
      id,
      email,
      name,
      biography,
      password,
    } = leagueFounderUserCreatorPayload;

    const leagueFounderUserId: LeagueFounderUserId = new LeagueFounderUserId(id);
    const leagueFounderUserEmail: LeagueFounderUserEmail = new LeagueFounderUserEmail({ value: email.value, verified: false });

    await this.#idUniquenessValidatorService.ensureUniqueId<LeagueFounderUserId, ILeagueFounderUser, LeagueFounderUser>(leagueFounderUserId);
    await this.#emailUniquenessValidatorService.ensureUniqueEmail<LeagueFounderUserEmail, ILeagueFounderUser, LeagueFounderUser>(leagueFounderUserEmail);

    const active: boolean = true;
    const leagueFounderUserPassword: LeagueFounderUserPassword = this.#securePasswordCreationService.createFromPlainText<LeagueFounderUserPassword>(password);
    const leagueFounderUserCreatedAt: LeagueFounderUserCreatedAt = this.#businessDateService.getCurrentDate<LeagueFounderUserCreatedAt>();
    const leagueFounderUserUpdatedAt: LeagueFounderUserUpdatedAt = this.#businessDateService.getCurrentDate<LeagueFounderUserUpdatedAt>();

    const leagueFounderUser: LeagueFounderUser = new LeagueFounderUser(
      leagueFounderUserId.getValue(),
      name,
      biography,
      leagueFounderUserEmail.getValue(),
      leagueFounderUserPassword.getValue(),
      active,
      leagueFounderUserCreatedAt.getValue(),
      leagueFounderUserUpdatedAt.getValue(),
    );

    return this.#leagueFounderUserRepository.save(leagueFounderUser);
  }
}
